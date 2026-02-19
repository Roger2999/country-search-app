import { Input } from "@/components/ui/Input";
import { useState, type ComponentProps } from "react";
import style from "./Main.module.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAllCountries } from "@/hooks/useAllCountries";
import { CountryCard } from "@/components/ui/CountryCard";
import { Search } from "lucide-react";

import { countryStore } from "@/stores/countryStore";
type Props = ComponentProps<"main">;
export const Main = ({ className, ...props }: Props) => {
  const [country, setCountry] = useState<string>("");
  const [region, setRegion] = useState<string>("all");
  const setSelectedCountry = countryStore((state) => state.setSelectedCountry);
  const { data: countriesData, isLoading, isError, error } = useAllCountries();
  const regions = [...new Set(countriesData?.map((c) => c.region))];
  const filtratedData = countriesData?.filter((c) => {
    const matchesCountry = c.name?.common
      .toLowerCase()
      .includes(country.toLowerCase());
    const matchesRegion =
      region === "all" || c.region.toLowerCase() === region.toLowerCase();
    return matchesCountry && matchesRegion;
  });

  return (
    <main {...props} className={`${className}`}>
      <div className="flex h-14 flex-col gap-5 sm:flex-row sm:justify-between sm:gap-3">
        <div className="relative min-h-full">
          <Search className="absolute top-5 left-5 size-5 text-gray-400" />
          <Input
            value={country}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCountry(e.target.value)
            }
            className="bg-input min-h-full w-100 max-w-full pl-14"
            placeholder="Search for a country..."
          />
        </div>
        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger className="bg-select min-h-full w-full max-w-48 pl-6">
            <SelectValue placeholder="Filter by Region" />
          </SelectTrigger>
          <SelectContent
            position="popper"
            align="center"
            className="bg-select-options"
          >
            <SelectItem value={"all"}>All</SelectItem>
            {regions.map((r) => (
              <SelectItem key={r} value={r}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className={`${style.girdContainer}`}>
        {isLoading && (
          <p className="m-auto mt-20 w-fit text-4xl font-semibold">
            Loading...
          </p>
        )}
        {isError && <p>{`Error: ${error?.message}`}</p>}
        {filtratedData &&
          filtratedData.length &&
          filtratedData?.map((c) => (
            <>
              <button
                key={c.name.official}
                type="button"
                onClick={() => setSelectedCountry(c)}
                className="all ease transition duration-400 hover:scale-105 hover:cursor-pointer"
              >
                <CountryCard
                  flagImg={c.flags.svg}
                  countryName={c.name.common}
                  population={c.population}
                  region={c.region}
                  capital={c.capital.map((c) => c)}
                ></CountryCard>
              </button>
            </>
          ))}
      </div>
    </main>
  );
};
