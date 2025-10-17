import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-textMain font-sans">
      {/* 🔹 Nawigacja */}
      <nav className="bg-surface shadow-lg p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">🚗 Komis Samochodowy</h1>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-accent transition">Strona główna</Link>
          <Link to="/list" className="hover:text-accent transition">Lista aut</Link>
          <Link to="/form" className="hover:text-accent transition">Dodaj auto</Link>
        </div>
      </nav>

      {/* 🔹 Główna treść (tu wczytują się strony) */}
      <main className="flex-1 p-6 md:p-10">
        <Outlet />
      </main>

      {/* 🔹 Stopka */}
      <footer className="bg-surface border-t border-gray-700 text-center p-4 text-sm text-textMuted">
        © 2025 Komis Samochodowy. Wszelkie prawa zastrzeżone.
      </footer>
    </div>
  );
}
