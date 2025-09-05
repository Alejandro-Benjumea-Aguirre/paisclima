export interface WeatherInfo {
  temp: number; // temperatura en °C
  condition: string; // descripción del clima (ej. "Partly Cloudy")
  icon: "sun" | "cloud" | "rain" | string; // ícono del clima
}

export interface Country {
  name: string; // nombre del país
  flag: string; // emoji o URL de la bandera
  capital: string; // capital del país
  population: number; // población (mejor como número que string)
  region: string; // continente o región
  weather: WeatherInfo; // clima actual
}

export interface CountryCardProps {
  country?: Country;
  isFavorite?: boolean;
  onToggleFavorite: (countryName: string) => void; // ✅ Correcto: función que recibe string y no retorna nada
}
