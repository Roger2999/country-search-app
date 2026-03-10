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
    <div className="card-container flex min-h-full flex-col">
      <div className="aspect-16/8 w-full overflow-hidden">
        <img
          className="h-full w-full border border-black/10 object-cover"
          width={20}
          height={20}
          src={flagImg}
          alt={`${countryName}-flag`}
        />
      </div>
      <div className="bg-background-secondary flex flex-1 flex-col flex-wrap items-start gap-2 rounded-sm px-10 py-5 shadow-xl">
        <p className="mb-2 text-left text-xl font-bold">
          {countryName ? countryName : "?"}
        </p>
        <p>
          <b className="font-semibold">Population:</b>{" "}
          {population ? population : "?"}
        </p>
        <p>
          <b className="font-semibold">Region:</b> {region ? region : "?"}
        </p>
        <p>
          <b className="font-semibold">Capital:</b>{" "}
          {capital?.length ? capital.join(", ") : "?"}
        </p>
      </div>
    </div>
  );
};
