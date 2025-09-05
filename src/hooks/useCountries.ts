import { useEffect, useState } from "react";
import { getAllCountries } from "../api/countryService";
import { getWithTTL, setWithTTL } from "../utils/cache";

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const cacheKey = "countries_v1";

  useEffect(() => {
    const cached = getWithTTL(cacheKey);
    if (cached) {
      setCountries(cached);
      setLoading(false);
      return;
    }

    getAllCountries()
      .then((data) => {
        console.log(data);
        setCountries(data);
        setWithTTL(cacheKey, data, 1000 * 60 * 60 * 24); // 1 día
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { countries, loading };
}
