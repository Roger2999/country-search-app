import type { Countries } from "@/types/countriesResponse";
import { Button } from "./ui/Button";
import { ArrowLeft } from "lucide-react";

interface Props {
  selectedCountry: Countries | null;
  onClose: () => void;
}

export const CountryModal = ({ selectedCountry, onClose }: Props) => {
  if (!selectedCountry) return null;

  const getNativeName = () => {
    if (!selectedCountry.name.nativeName) return selectedCountry.name.common;
    const keys = Object.keys(selectedCountry.name.nativeName);
    if (keys.length === 0) return selectedCountry.name.common;
    const firstKey = keys[0];
    return selectedCountry.name.nativeName[firstKey as keyof typeof selectedCountry.name.nativeName]?.common || selectedCountry.name.common;
  };

  const getCurrencies = () => {
    if (!selectedCountry.currencies) return "?";
    return Object.values(selectedCountry.currencies)
      .map((c) => c.name)
      .join(", ");
  };

  const getLanguages = () => {
    if (!selectedCountry.languages) return "?";
    return Object.values(selectedCountry.languages).join(", ");
  };

  const getTopLevelDomain = () => {
    if (!selectedCountry.tld || selectedCountry.tld.length === 0) return "?";
    return selectedCountry.tld.join(", ");
  };

  return (
    <div className="modal bg-background fixed z-20 flex min-h-dvh w-dvw flex-col gap-16 px-20 py-12">
      <div className="w-fit">
        <Button
          className="flex cursor-pointer items-center gap-2 px-8"
          onClick={onClose}
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-24">
        <div className="shrink-0">
          <img
            src={selectedCountry.flags.svg}
            alt={`${selectedCountry.name.common} flag`}
            className="h-auto w-full max-w-140 object-cover shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-extrabold">
            {selectedCountry.name.common}
          </h1>

          <div className="flex flex-col gap-8 lg:flex-row lg:gap-24">
            <div className="flex flex-col gap-3">
              <p>
                <span className="font-semibold">Native Name:</span>{" "}
                {getNativeName()}
              </p>
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {selectedCountry.population?.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region:</span>{" "}
                {selectedCountry.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region:</span>{" "}
                {selectedCountry.subregion || "?"}
              </p>
              <p>
                <span className="font-semibold">Capital:</span>{" "}
                {selectedCountry.capital?.join(", ") || "?"}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p>
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {getTopLevelDomain()}
              </p>
              <p>
                <span className="font-semibold">Currencies:</span>{" "}
                {getCurrencies()}
              </p>
              <p>
                <span className="font-semibold">Languages:</span>{" "}
                {getLanguages()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
