import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../images/logo.png"

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-textMain font-sans">
      {/* Nawigacja */}
      <nav className="bg-surface/95 backdrop-blur-sm border-b border-gray-700 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <img
              src={logo}
              alt="Logo"
              className="h-12 object-contain rounded-md"
            />
            <span className="text-xl font-bold text-primary tracking-wide">
              {/* Kupię Twoją Brykę */}
            </span>
          </Link>

          <div className="flex gap-4">
            {/* <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-textMuted hover:text-accent hover:bg-gray-800/60"
                }`
              }
            >
              Strona główna
            </NavLink> */}

            <NavLink
              to="/list"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-textMuted hover:text-accent hover:bg-gray-800/60"
                }`
              }
            >
              Lista aut
            </NavLink>

            <NavLink
              to="/form"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-textMuted hover:text-accent hover:bg-gray-800/60"
                }`
              }
            >
              Dodaj auto
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Główna treść */}
      <main className="flex-1 p-6 md:p-10">
        <Outlet />
      </main>

      {/* Stopka */}
      <footer className="bg-surface border-t border-gray-700 text-center p-4 text-sm text-textMuted">
        © 2025 Wszelkie prawa zastrzeżone.
      </footer>
    </div>
  );
}
