import { CountryModal } from "./components/CountryModal";
import { Header, Main } from "./layouts";
import { countryStore } from "./stores/countryStore";

export const App = () => {
  const selectedCountry = countryStore((state) => state.selectedCountry);
  const setSelectedCountry = countryStore((state) => state.setSelectedCountry);

  const handleCloseModal = () => {
    setSelectedCountry(null);
  };
  return (
    <div className="app-container flex flex-col w-full min-h-dvh">
      <Header />
      <CountryModal
        selectedCountry={selectedCountry}
        onClose={handleCloseModal}
      />
      <Main className="flex flex-col gap-28 sm:gap-10 flex-1 px-10 sm:px-14 py-10" />
    </div>
  );
};
