import type { Countries } from "@/types/countriesResponse";
import { Button } from "./ui/Button";

interface Props {
  selectedCountry: Countries | null;
  onClose: () => void;
}
export const CountryModal = ({ selectedCountry, onClose }: Props) => {
  if (!selectedCountry) return null;
  return (
    <div className="modal flex flex-col items-center  absolute z-20 bg-gray-700 w-dvw min-h-dvh gap-12 pt-20">
      <div className="flex w-full px-20">
        <Button onClick={onClose}>Back</Button>
      </div>
      <div className="modal-content flex justify-between w-full px-20">
        <div className="flag-container">
          <img
            src={selectedCountry.flags.svg}
            alt={`${selectedCountry.name.common}-flag`}
            className="size-full w-100 h-64"
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
