const OWM = "https://api.openweathermap.org/data/2.5";
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

async function fetchWithRetry(url: string, opts = {}, retries = 2) {
  try {
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  } catch (err) {
    if (retries > 0) {
      await new Promise((r) => setTimeout(r, 300 * (3 - retries))); // backoff
      return fetchWithRetry(url, opts, retries - 1);
    }
    throw err;
  }
}

export async function getCurrentWeather(lat: number, lon: number) {
  const url = `${OWM}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  return fetchWithRetry(url);
}
