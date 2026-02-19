import type { Country } from "@/types/countriesResponse";
import { Button } from "./ui/Button";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

interface Props {
  selectedCountry: Country | null;
  onClose: () => void;
}

export const CountryModal = ({ selectedCountry, onClose }: Props) => {
  useEffect(() => {
    if (selectedCountry) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCountry]);

  const currencies =
    selectedCountry?.currencies &&
    Object.values(selectedCountry.currencies)
      .map((c) => c.name)
      .join(", ");

  const languages =
    selectedCountry?.languages &&
    Object.values(selectedCountry.languages).join(", ");

  const nativeName =
    selectedCountry?.name?.nativeName &&
    Object.values(selectedCountry.name.nativeName)[0]?.common;

  const population = selectedCountry?.population?.toLocaleString();
  const region = selectedCountry?.region;
  const subregion = selectedCountry?.subregion;
  const capital = selectedCountry?.capital?.join(", ");
  const topLevelDomain = selectedCountry?.tld?.join(", ");

  if (!selectedCountry) return null;

  return (
    <div className="modal bg-background fixed z-20 flex min-h-dvh w-dvw flex-col gap-16 px-20 py-12">
      <div className="w-fit">
        <Button
          size={"lg"}
          className="bg-background-secondary text-foreground border-foreground/20 flex cursor-pointer items-center gap-2 border px-8"
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
                {nativeName || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {population || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Region:</span> {region || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Sub Region:</span>{" "}
                {subregion || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Capital:</span>{" "}
                {capital || "N/A"}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p>
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {topLevelDomain || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Currencies:</span>{" "}
                {currencies || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Languages:</span>{" "}
                {languages || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
