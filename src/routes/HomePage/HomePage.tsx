import { BottomPagination, CharacterCard } from "@/components";
import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
import { ContentLayout } from "@/layouts";
import type { ICharacter } from "../../interfaces/characters";
import SearchIcon from "@mui/icons-material/Search";
import { styles } from "./homePage.styles";
import { useCharacters } from "@/hooks/useCharacters";
import { useCharactersContext } from "@/hooks/useCharactersContext";

export const HomePage = () => {
  const { characters } = useCharactersContext();
  const [characterNameFilter, setCharacterNameFilter] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [count, setCount] = useState<number>();
  const { error, isLoading } = useCharacters(pageNumber, characterNameFilter);

  const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => {
    setPageNumber(newPage);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleClickSearch = () => {
    setCharacterNameFilter(name);
  };

  const handleClearSearch = () => {
    setCharacterNameFilter("");
  };

  useEffect(() => {
    characters && setCount(characters.info.pages);
  }, [characters]);

  const renderCharacters = useMemo(
    () =>
      characters && (
        <Stack gap={4} direction="row" flexWrap="wrap" justifyContent="center">
          {characters?.results.map((character: ICharacter) => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </Stack>
      ),
    [characters]
  );

  return (
    <Stack>
      <ContentLayout isLoading={isLoading} error={error}>
        <Stack>
          <Stack
            direction={["column", "row"]}
            justifyContent="space-between"
            mb={6}
          >
            <Box sx={styles.logo}>
              <img
                src="/Rick_and_Morty.svg"
                alt="Rick and Morty logo"
                width="100%"
              />
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              mt={[2, 0]}
            >
              <TextField
                id="name-input"
                label="Search by Name"
                variant="outlined"
                onChange={handleChangeName}
                size="small"
              />
              {!characterNameFilter ? (
                <Button
                  sx={{ ml: 2 }}
                  aria-label="search"
                  startIcon={<SearchIcon />}
                  onClick={handleClickSearch}
                >
                  Search
                </Button>
              ) : (
                <Button
                  size="small"
                  aria-label="clear search"
                  onClick={handleClearSearch}
                >
                  Clear search
                </Button>
              )}
            </Stack>
          </Stack>
          {renderCharacters}
        </Stack>
      </ContentLayout>
      {!error && count && (
        <BottomPagination
          count={count}
          page={pageNumber}
          handleChangePage={handleChangePage}
        />
      )}
    </Stack>
  );
};
