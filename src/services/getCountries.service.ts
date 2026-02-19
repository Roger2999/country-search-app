import type { Country } from "@/types/countriesResponse";

export const getCountries = async (): Promise<Country[]> => {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,cca2,region,subregion,tld,currencies,languages",
  );
  if (!response.ok) {
    throw new Error(`${response.status},${response.statusText}`);
  }
  const result: Country[] = await response.json();
  return result;
};
