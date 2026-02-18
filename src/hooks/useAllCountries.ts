import { getCountries } from "@/services/getCountries.service";
import { useQuery } from "@tanstack/react-query";

export const useAllCountries = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["countries"],
    queryFn: () => getCountries(),
    staleTime: 60000,
  });
  return { data, isLoading, isError, error };
};
