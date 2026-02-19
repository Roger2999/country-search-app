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
  if (!selectedCountry) return null;
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
                {selectedCountry.name.common}
              </p>
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {selectedCountry.population}
              </p>
              <p>
                <span className="font-semibold">Region:</span>{" "}
                {selectedCountry.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region:</span>{" "}
                {selectedCountry.region}
              </p>
              <p>
                <span className="font-semibold">Capital:</span>{" "}
                {selectedCountry.capital?.map((c) => c).join(", ")}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p>
                <span className="font-semibold">Top Level Domain:</span>
                {selectedCountry.tld}
              </p>
              <p>
                <span className="font-semibold">Currencies:</span> Euro
              </p>
              <p>
                <span className="font-semibold">Languages:</span> Dutch, French
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
