import type { Country } from "@/types/countriesResponse";
import { useEffect, useState } from "react";
export const useDebounce = (country: Country, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<Country>(country);
  useEffect(() => {
    const handleDebounce = setTimeout(() => {
      setDebounceValue(country);
    }, delay);
    return () => {
      clearTimeout(handleDebounce);
    };
  }, [country, delay]);

  return { debounceValue };
};
