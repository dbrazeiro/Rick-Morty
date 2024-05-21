import { CssBaseline, createTheme } from "@mui/material";
import React, { useState } from "react";
import { CharactersContext } from "./hooks/useCharactersContext";
import { ICharacters } from "./interfaces/characters";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { router } from "./routes";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#388e3c",
    },
  },
});

const App = () => {
  const [characters, setCharacters] = useState<ICharacters | null>(null);

  return (
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <CharactersContext.Provider value={{ characters, setCharacters }}>
          <RouterProvider router={router} />
        </CharactersContext.Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
