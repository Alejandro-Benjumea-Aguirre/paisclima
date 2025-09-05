const REST_BASE = "https://restcountries.com/v3.1";

export async function getAllCountries() {
  const res = await fetch(`${REST_BASE}/all`);
  if (!res.ok) throw new Error("Error cargando países");
  return res.json(); // arreglos de objetos país
}

export async function getCountryByName(name: string) {
  const res = await fetch(`${REST_BASE}/name/${encodeURIComponent(name)}`);
  if (!res.ok) throw new Error("No encontrado");
  return res.json();
}
