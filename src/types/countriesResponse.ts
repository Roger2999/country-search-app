export interface Country {
  flags: Flags;
  name: Name;
  tld: string[];
  cca2: string;
  currencies: Currencies;
  capital: string[];
  region: string;
  subregion: string;
  languages: Languages;
  population: number;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
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
