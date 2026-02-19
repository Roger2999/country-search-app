import type { Countries } from "@/types/countriesResponse";

export const getCountries = async (): Promise<Countries[]> => {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,cca2,region,subregion,tld,currencies,languages",
  );
  if (!response.ok) {
    throw new Error(`${response.status},${response.statusText}`);
  }
  const result: Countries[] = await response.json();
  return result;
};
