import { getDetailsCounties } from "@/services/getDetailsCountries.service";
import { useQuery } from "@tanstack/react-query";
import type { CountryById } from "@/types/countriesbyIdResponse";

export const useBorderCountries = (borders: string[] | undefined) => {
  const borderCodes = borders && borders.length > 0 ? borders : [];

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["borderCountries", borderCodes],
    queryFn: async (): Promise<CountryById[]> => {
      if (borderCodes.length === 0) return [];
      const url = `https://restcountries.com/v3.1/alpha?codes=${borderCodes.join(",")}`;
      return getDetailsCounties(url);
    },
    enabled: borderCodes.length > 0,
    staleTime: 60000,
  });

  return { data, isLoading, isError, error };
};
