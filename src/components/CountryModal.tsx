import type { Countries } from "@/types/countriesResponse";
import { Button } from "./ui/Button";
import { useEffect } from "react";

interface Props {
  selectedCountry: Countries | null;
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
    <div className="modal bg-background fixed z-20 flex min-h-dvh w-dvw flex-col items-center gap-12 pt-20">
      <div className="flex w-full px-20">
        <Button className="cursor-pointer" onClick={onClose}>
          Back
        </Button>
      </div>
      <div className="modal-content flex w-full justify-between px-20">
        <div className="flag-container">
          <img
            src={selectedCountry.flags.svg}
            alt={`${selectedCountry.name.common}-flag`}
            className="size-full h-64 w-100"
          />
        </div>
        <div className="description-container">
          <p>
            {selectedCountry.name.common ? selectedCountry.name.common : "?"}
          </p>
          <p>
            Population:
            {selectedCountry.population ? selectedCountry.population : "?"}
          </p>
          <p>Region: {selectedCountry.region ? selectedCountry.region : "?"}</p>
          <p>
            Capital: {selectedCountry.capital ? selectedCountry.capital : "?"}
          </p>
        </div>
      </div>
    </div>
  );
};
