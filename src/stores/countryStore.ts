import type { Countries } from "@/types/countriesResponse";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CountryState {
  selectedCountry: Countries | null;
  setSelectedCountry: (country: Countries | null) => void;
}

export const countryStore = create(
  persist<CountryState>(
    (set) => ({
      selectedCountry: null,
      setSelectedCountry: (country: Countries | null) =>
        set({ selectedCountry: country }),
    }),
    {
      name: "selectedCountry",
    },
  ),
);
