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
type Props = ComponentProps<"main">;
export const Main = ({ className, ...props }: Props) => {
  const [country, setCountry] = useState<string>("");
  const [region, setRegion] = useState<string>("all");
  const { data: countriesData } = useAllCountries();
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
      <div className="flex flex-col gap-5 h-14 sm:flex-row sm:justify-between sm:gap-3">
        <div className="relative min-h-full">
          <Search
            className="absolute left-5 top-5 size-5 text-gray-400"
          />
          <Input
            value={country}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCountry(e.target.value)
            }
            className="w-100 max-w-full min-h-full pl-14 bg-input"
            placeholder="Search for a country..."
          />
        </div>
        <Select value={region} onValueChange={setRegion}>
          <SelectTrigger className="w-full max-w-48 min-h-full pl-6 bg-select">
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
        {filtratedData?.map((c) => (
          <CountryCard
            key={c.name.official}
            flagImg={c.flags.svg}
            countryName={c.name.common}
            population={c.population}
            region={c.region}
            capital={c.capital.map((c) => c)}
          ></CountryCard>
        ))}
      </div>
    </main>
  );
};
