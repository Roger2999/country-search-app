import type { Country } from "@/types/countriesResponse";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CountryState {
  selectedCountry: Country | null;
  setSelectedCountry: (country: Country | null) => void;
}

export const countryStore = create(
  persist<CountryState>(
    (set) => ({
      selectedCountry: null,
      setSelectedCountry: (country: Country | null) =>
        set({ selectedCountry: country }),
    }),
    {
      name: "selectedCountry",
    },
  ),
);
