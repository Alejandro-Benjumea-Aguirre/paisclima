import { Sun, Cloud, CloudRain, MapPin, Heart, Globe } from "lucide-react";
import { Button } from "../ui/Button";

const WeatherIcon = ({ type, className = "w-6 h-6" }) => {
  const icons = {
    sun: <Sun className={`${className} text-yellow-500`} />,
    cloud: <Cloud className={`${className} text-gray-500`} />,
    rain: <CloudRain className={`${className} text-blue-500`} />,
  };
  return icons[type] || icons.sun;
};

const CountryCard = ({ country, isFavorite, onToggleFavorite }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
    {/* Header con bandera y favorito */}
    <div className="relative h-48 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center">
      <div className="text-8xl drop-shadow-lg">{country.flag}</div>
      <Button
        onClick={() => onToggleFavorite(country.name)}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
      >
        <Heart
          className={`w-5 h-5 ${
            isFavorite ? "fill-red-500 text-red-500" : "text-white"
          }`}
        />
      </Button>
    </div>

    {/* Contenido principal */}
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {country.name}
        </h3>
        <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
          {country.region}
        </span>
      </div>

      {/* Información básica */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <MapPin className="w-4 h-4 mr-2 text-gray-400" />
          <span className="text-sm">{country.capital}</span>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Globe className="w-4 h-4 mr-2 text-gray-400" />
          <span className="text-sm">{country.population}</span>
        </div>
      </div>

      {/* Widget del clima */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <WeatherIcon type={country.weather.icon} className="w-8 h-8 mr-3" />
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {country.weather.temp}°C
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {country.weather.condition}
              </p>
            </div>
          </div>
          <Button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors">
            View Details
          </Button>
        </div>
      </div>
    </div>
  </div>
);
