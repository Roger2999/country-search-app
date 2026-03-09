import { getCountries } from "@/services/getCountries.service";
import { getDetailsCounties } from "@/services/getDetailsCountries.service";
import { useQuery } from "@tanstack/react-query";

export const useAllCountries = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["countries"],
    queryFn: () => getCountries(),
    staleTime: 60000,
  });
  return { data, isLoading, isError, error };
};
export const useDetailsCounties = (url: string, cca2: string | undefined) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["details", cca2],
    queryFn: () => getDetailsCounties(url),
    staleTime: 60000,
  });
  return { data, isLoading, isError, error };
};
