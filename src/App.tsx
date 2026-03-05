import { CountryModal } from "./components/ui/CountryModal";
import { Header, Main } from "./layouts";
import { countryStore } from "./stores/countryStore";

export const App = () => {
  const selectedCountry = countryStore((state) => state.selectedCountry);
  const setSelectedCountry = countryStore((state) => state.setSelectedCountry);

  const handleCloseModal = () => {
    setSelectedCountry(null);
  };
  return (
    <div className="app-container flex min-h-dvh w-full flex-col">
      <Header />
      <CountryModal
        selectedCountry={selectedCountry}
        onClose={handleCloseModal}
      />
      <Main className="flex flex-1 flex-col gap-28 px-10 py-10 sm:gap-10 sm:px-14" />
    </div>
  );
};
