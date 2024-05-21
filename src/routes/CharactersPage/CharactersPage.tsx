import { Button, Stack, Typography, TypographyOwnProps } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ICharacter } from "@/interfaces/characters";
import { styles } from "./charactersPage.styles";
import { useCharactersContext } from "@/hooks/useCharactersContext";
import { useEffect } from "react";

const descriptionProps: TypographyOwnProps = {
  variant: "body2",
  color: "text.secondary",
};

export const CharactersPage = () => {
  const { id } = useParams();
  const { characters } = useCharactersContext();
  const navigate = useNavigate();

  const selectedCharacter = id
    ? characters?.results.find((character: ICharacter) => character.id === +id)
    : null;

  useEffect(() => {
    if (!selectedCharacter) {
      navigate("/");
    }
  }, [navigate, selectedCharacter]);

  const handleClickBack = () => {
    navigate("..");
  };

  return (
    selectedCharacter && (
      <Stack sx={styles.wrapper}>
        <Button
          variant="outlined"
          size="small"
          sx={styles.backButton}
          onClick={handleClickBack}
        >
          Back to Home
        </Button>
        <Stack alignItems="center">
          <img
            src="/Rick_and_Morty.svg"
            alt="Rick and Morty logo"
            style={styles.logo}
          />
        </Stack>
        <Typography component="h1" sx={styles.title}>
          {selectedCharacter.name}
        </Typography>
        <Stack direction={["column", "row"]} gap={2}>
          <Stack>
            <img
              src={selectedCharacter.image}
              title={selectedCharacter.name}
              style={styles.characterImage}
            />
          </Stack>
          <Stack gap={[1, 2]}>
            <Typography
              {...descriptionProps}
            >{`Status: ${selectedCharacter.status}`}</Typography>
            <Typography
              {...descriptionProps}
            >{`Species: ${selectedCharacter.species}`}</Typography>
            <Typography
              {...descriptionProps}
            >{`Type: ${selectedCharacter.type}`}</Typography>
            <Typography
              {...descriptionProps}
            >{`Gender: ${selectedCharacter.gender}`}</Typography>
            <Typography
              {...descriptionProps}
            >{`Origin: ${selectedCharacter.origin.name}`}</Typography>
            <Typography
              {...descriptionProps}
            >{`Location: ${selectedCharacter.location.name}`}</Typography>
          </Stack>
        </Stack>
      </Stack>
    )
  );
};
