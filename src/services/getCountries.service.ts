import type { Countries } from "@/types/countiesResponse";

export const getCountries = async (): Promise<Countries[]> => {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,cca2,region",
  );
  if (!response.ok) {
    throw new Error(`${response.status},${response.statusText}`);
  }
  const result: Countries[] = await response.json();
  return result;
};
