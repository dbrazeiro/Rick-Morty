export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
}

export interface ICharacters {
  info: {
    count: number;
    pages: 6;
    next: string;
    prev: string;
  };
  count: number;
  next: string;
  previous: string;
  results: ICharacter[];
}
