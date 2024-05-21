import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { ICharacters } from "@/interfaces/characters";

export const CharactersContext = createContext<
  | {
      characters: ICharacters | null;
      setCharacters: Dispatch<SetStateAction<ICharacters | null>>;
    }
  | undefined
>(undefined);

export const useCharactersContext = () => {
  const Context = useContext(CharactersContext);

  if (Context === undefined) {
    throw new Error(
      "useCharactersContext must be used with a CharactersContext"
    );
  }

  return Context;
};
