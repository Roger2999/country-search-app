import { useEffect, useState } from "react";
export const useDebounce = (country: string, delay: number) => {
  const [debounceCountry, setDebounceCountry] = useState<string>(country);
  useEffect(() => {
    const handleDebounce = setTimeout(() => {
      setDebounceCountry(country);
    }, delay);
    return () => {
      clearTimeout(handleDebounce);
    };
  }, [country, delay]);

  return { debounceCountry };
};
