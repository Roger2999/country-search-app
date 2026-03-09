import { Button } from "@/components/ui/Button";
import { LoadingComponent } from "@/components/ui/LoadingComponent";

import { useDetailsCounties } from "@/hooks/useAllCountries";

import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const CountryDetailsPage = () => {
  const { cca2 } = useParams();
  const navigate = useNavigate();
  const {
    data: countyDataArr,
    isLoading,
    isError,
    error,
  } = useDetailsCounties(`https://restcountries.com/v3.1/alpha/${cca2}`, cca2);

  const countyData = countyDataArr?.[0];

  const currencies =
    countyData?.currencies &&
    Object.values(countyData.currencies)
      .map((c: { name: string }) => c.name)
      .join(", ");
  const languages =
    countyData?.languages && Object.values(countyData.languages).join(", ");
  const nativeName =
    countyData?.name?.nativeName &&
    Object.values(countyData.name.nativeName)[0]?.common;
  const population = countyData?.population?.toLocaleString();
  const region = countyData?.region;
  const subregion = countyData?.subregion;
  const capital = countyData?.capital?.join(", ");
  const topLevelDomain = countyData?.tld?.join(", ");

  if (isLoading) return <LoadingComponent />;
  if (isError) return <p>An error has ocurred: ${error?.message}</p>;
  if (!countyData) return null;

  return (
    <div className="bg-background flex flex-col gap-5 px-10 py-5 sm:gap-16 sm:px-20 sm:py-12">
      <div className="w-fit">
        <Button
          size={"lg"}
          className="bg-background-secondary text-foreground border-foreground/20 flex w-28 cursor-pointer items-center gap-2 rounded-xs border-none shadow-2xl"
          onClick={() => navigate("/homepage")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-24">
        <div className="shrink-0">
          <img
            src={countyData.flags.svg}
            alt={`${countyData.name.common} flag`}
            className="size-4 h-auto max-h-56 w-120 max-w-full border border-black/10 object-cover shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-extrabold">{countyData.name.common}</h1>

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
export default CountryDetailsPage;
