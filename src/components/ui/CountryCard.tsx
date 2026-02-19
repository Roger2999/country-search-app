interface Props {
  flagImg: string;
  countryName: string;
  population: number;
  region: string;
  capital?: string[];
}
export const CountryCard = ({
  flagImg,
  countryName,
  population,
  region,
  capital,
}: Props) => {
  return (
    <div className="card-container flex min-h-full max-w-[80%] min-w-full flex-col">
      <div className="h-40 w-full">
        <img
          className="h-full w-full object-cover object-center"
          width={20}
          height={20}
          src={flagImg}
          alt={`${countryName}-flag`}
        />
      </div>
      <div className="bg-background-secondary flex flex-1 flex-col flex-wrap items-start gap-2 px-10 py-5">
        <p className="mb-2 text-xl font-bold">
          {countryName ? countryName : "?"}
        </p>
        <p>Population: {population ? population : "?"}</p>
        <p>Region: {region ? region : "?"}</p>
        <p>Capital: {capital ? capital : "?"}</p>
      </div>
    </div>
  );
};
