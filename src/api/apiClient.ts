const API_URL = "https://kupietwojabryke.onrender.com";

// Pomocnicza funkcja do pobierania tokena
function getAuthHeader(): Record<string, string> {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  // Zawsze definiujemy headers jako obiekt typu Record<string, string>
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...getAuthHeader(),
  };

  // Jeśli użytkownik podał własne nagłówki — scal je ręcznie
  if (options.headers && typeof options.headers === "object") {
    Object.assign(headers, options.headers as Record<string, string>);
  }

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const message = `Błąd HTTP ${res.status}`;
    console.error(message);
    throw new Error(message);
  }

  // DELETE często zwraca 204 (bez treści)
  if (res.status === 204) return null as T;

  return res.json() as Promise<T>;
}
