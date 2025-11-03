import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../../public/images/logo.png";

export function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="h-screen flex flex-col bg-background text-textMain font-sans">
      {/* 🧭 Nawigacja */}
      <nav className="bg-navigation backdrop-blur-sm shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-90 transition"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-12 object-contain rounded-md"
            />
            <span className="text-m font-bold text-primary tracking-wide">
              Kupię Twoją Brykę
            </span>
          </Link>

          {/* Linki */}
          <div className="flex gap-4 items-center">
            <NavLink
              to="/list"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-textMuted hover:bg-accent"
                }`
              }
            >
              Lista pojazdów
            </NavLink>

            <NavLink
              to="/form"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-textMuted hover:bg-accent"
                }`
              }
            >
              Dodaj pojazd
            </NavLink>

            {/* 🔴 Wyloguj się */}
            <button
              onClick={handleLogout}
              className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Wyloguj się
            </button>
          </div>
        </div>
      </nav>

      {/* 📄 Główna treść */}
      <main className="flex-1 overflow-auto p-6 md:p-10">
        <Outlet />
      </main>

      {/* 📌 Stopka */}
      <footer className="bg-navigation text-center p-4 text-sm text-textMuted">
        © 2025 Wszelkie prawa zastrzeżone.
      </footer>
    </div>
  );
}
