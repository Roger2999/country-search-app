import type { Countries } from "@/types/countriesResponse";
import { useEffect, useState } from "react";
export const useDebounce = (country: Countries, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<Countries>(country);
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
