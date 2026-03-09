import type { CountryById } from "@/types/countriesbyIdResponse";

export const getDetailsCounties = async (
  url: string,
): Promise<CountryById[]> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Error in response ${response.status}, ${response.statusText}`,
    );
  }
  const result = response.json();
  return result;
};
