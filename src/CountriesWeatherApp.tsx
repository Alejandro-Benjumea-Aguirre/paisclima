import { useEffect, useState } from "react";
import { Header } from "./components/layout/Header";
import { CountryCard } from "./components/country/CountryCard";
import { StatsCard } from "./components/common/StartCard";

import { Globe, Thermometer, Eye, Wind } from "lucide-react";
import { SearchFilters } from "./components/common/SearchFilters";
import { useCountries } from "./hooks/useCountries";

export default function CountriesWeatherApp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [favorites, setFavorites] = useState(new Set());
  const [isDark, setIsDark] = useState(false);

  const { countries, loading, error } = useCountries();

  const toggleFavorite = (countryName: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(countryName)) {
      newFavorites.delete(countryName);
    } else {
      newFavorites.add(countryName);
    }
    setFavorites(newFavorites);
  };

  return (
    <div
      className={`min-h-screen transition-colors ${
        isDark ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Header isDark={isDark} toggleDark={() => setIsDark(!isDark)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Countries & Weather
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover detailed information about countries around the world,
            including real-time weather data and interactive maps.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            icon={Globe}
            title="Total Countries"
            value="195"
            trend="2"
          />
          <StatsCard
            icon={Thermometer}
            title="Weather Updates"
            value="24/7"
            trend="2"
          />
          <StatsCard
            icon={Eye}
            title="Countries Viewed"
            value="1,234"
            trend="15"
          />
        </div>

        {/* Search and Filters */}
        <SearchFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
        />

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, key) => (
            <CountryCard
              key={key}
              country={country}
              isFavorite={favorites.has(country.name)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors inline-flex items-center">
            <Wind className="w-5 h-5 mr-2" />
            Load More Countries
          </button>
        </div>
      </main>
    </div>
  );
}
