import { useState } from "react";
import { getCurrentWeather } from "../api/weatherService";
import { getWithTTL, setWithTTL } from "../utils/cache";

export function useWeather() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchWeather(lat: number, lon: number) {
    const key = `weather_${lat.toFixed(3)}_${lon.toFixed(3)}`;
    const cached = getWithTTL(key);
    if (cached) return cached;

    setLoading(true);
    setError(null);
    try {
      const data = await getCurrentWeather(lat, lon);
      setWithTTL(key, data, 1000 * 60 * 10); // 10 minutos
      return data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return { fetchWeather, loading, error };
}
