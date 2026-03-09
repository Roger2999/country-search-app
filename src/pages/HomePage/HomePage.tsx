import { Input } from "@/components/ui/Input";
import { useState } from "react";
import style from "./HomePage.module.css";
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
import { useDebounce } from "@/hooks/useDebounce";
import { Link } from "react-router-dom";
import { LoadingComponent } from "@/components/ui/LoadingComponent";

const HomePage = ({ className }: { className?: string }) => {
  const [country, setCountry] = useState<string>("");
  const [region, setRegion] = useState<string>("all");
  const { debounceCountry } = useDebounce(country, 600);
  const { data: countriesData, isLoading, isError, error } = useAllCountries();
  const regions = [...new Set(countriesData?.map((c) => c.region))];
  const filtratedData = countriesData?.filter((c) => {
    const matchesCountry = c.name?.common
      .toLowerCase()
      .includes(debounceCountry.toLowerCase());
    const matchesRegion =
      region === "all" || c.region.toLowerCase() === region.toLowerCase();
    return matchesCountry && matchesRegion;
  });

  return (
    <main className={`flex w-full flex-col gap-10 ${className}`}>
      <div className="flex flex-col gap-5 px-8 sm:flex-row sm:justify-between sm:gap-3">
        <div className="relative h-14">
          <label htmlFor="country-search" className="sr-only">
            Search for a country
          </label>
          <Search className="absolute top-5 left-5 size-5 text-gray-400" />
          <Input
            id="country-search"
            type="text"
            inputMode="text"
            value={country}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCountry(e.target.value)
            }
            className="bg-input placeholder:text-input-foreground h-full w-100 max-w-full border border-black/10 pl-14 placeholder:text-sm"
            placeholder="Search for a country..."
          />
        </div>
        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger
            aria-label="Filter by region"
            className="bg-select min-h-14 w-full max-w-48 border border-black/10 pl-6"
          >
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
      <ul className={`${style.gridContainer} list-none`}>
        {isLoading && <LoadingComponent />}
        {isError && (
          <p className="m-auto mt-20 w-fit text-4xl font-semibold">{`Error: ${error?.message}`}</p>
        )}
        {filtratedData && filtratedData.length <= 0 && (
          <div className="absolute top-10 flex h-full w-full items-center justify-center">
            <p className="text-2xl">No countries found</p>
          </div>
        )}
        {filtratedData &&
          filtratedData.length > 0 &&
          filtratedData?.map((c) => (
            <li key={c.cca2}>
              <Link
                to={`/country/${c.cca2.toLowerCase()}`}
                className="all ease block h-full transition duration-400 hover:scale-105 hover:cursor-pointer"
              >
                <CountryCard
                  flagImg={c.flags.svg}
                  countryName={c.name.common}
                  population={c.population}
                  region={c.region}
                  capital={c.capital}
                ></CountryCard>
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};
export default HomePage;
