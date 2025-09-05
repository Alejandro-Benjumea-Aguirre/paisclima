export function setWithTTL(key: string, value: string, ttlMs: number) {
  const record = { value, exp: Date.now() + ttlMs };
  localStorage.setItem(key, JSON.stringify(record));
}
export function getWithTTL(key: string) {
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try {
    const { value, exp } = JSON.parse(raw);
    if (Date.now() > exp) {
      localStorage.removeItem(key);
      return null;
    }
    return value;
  } catch {
    localStorage.removeItem(key);
    return null;
  }
}
