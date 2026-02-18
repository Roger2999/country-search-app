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
    <div className="card-container flex flex-col min-w-full max-w-[80%] min-h-full bg-gray-500">
      <div className="w-full h-40 bg-gray-900">
        <img
          className="w-full h-full object-cover object-center"
          width={20}
          height={20}
          src={flagImg}
          alt={`${countryName}-flag`}
        />
      </div>
      <div className="flex-1 flex flex-col flex-wrap bg-gray-600 p-5">
        <p>{countryName ? countryName : "?"}</p>
        <p>Population: {population ? population : "?"}</p>
        <p>Region: {region ? region : "?"}</p>
        <p>Capital: {capital ? capital : "?"}</p>
      </div>
    </div>
  );
};
