import useSWR, { SWRConfiguration } from "swr";
import { config } from "../config";
import { useCharactersContext } from "./useCharactersContext";
const { apiBasePath } = config;

interface CustomError extends Error {
  info?: string;
  status?: number;
}

const charactersFetcher = async (url: string) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error: CustomError = new Error(
      "An error occurred while fetching the Characters."
    );
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

const configuration: SWRConfiguration = {
  onErrorRetry: (error, _key, _config, revalidate, { retryCount }) => {
    // Never retry on 404.
    if (error.status === 404) return;

    // Only retry up to 3 times.
    if (retryCount >= 3) return;

    // Retry after 5 seconds.
    setTimeout(() => revalidate({ retryCount }), 5000);
  },
};

export const useCharacters = (page: number, characterNameFilter: string) => {
  const { setCharacters } = useCharactersContext();
  // const url = `${apiBasePath}/character/?page=${+page}`;
  const url = `${apiBasePath}/character/?page=${page}&name=${characterNameFilter}`;
  const { data, error, isLoading } = useSWR(
    url,
    charactersFetcher,
    configuration
  );
  setCharacters(data);
  return { error, isLoading };
};
