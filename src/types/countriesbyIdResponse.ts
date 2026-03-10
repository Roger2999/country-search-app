export interface CountryById {
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  landlocked: boolean;
  area: number;
  maps: Maps;
  population: number;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flag: string;
  name: Name;
  currencies: Currencies;
  languages: Languages;
  latlng: number[];
  demonyms: Demonyms;
  translations: Translations;
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export type NativeName = Record<
  string,
  {
    official: string;
    common: string;
  }
>;

export type Currencies = Record<
  string,
  {
    name: string;
    symbol: string;
  }
>;

export type Languages = Record<string, string>;

export interface Demonyms {
  eng: Demonym;
  fra: Demonym;
}

export interface Demonym {
  f: string;
  m: string;
}

export type Translations = Record<
  string,
  {
    official: string;
    common: string;
  }
>;

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface PostalCode {
  format: string;
  regex: string;
}
