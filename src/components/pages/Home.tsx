import { Link } from "react-router-dom";
import logo from "../../../public/images/logo.png"

export function Home() {
  return (
    <div className="home">
      <div className="h-40 flex items-center justify-center bg-surface text-textMain rounded-lg shadow-md">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <img
              src={logo}
              alt="Logo"
              className="h-36 object-contain"
            />
            <span className="text-xl font-bold text-primary tracking-wide">
              Kupię Twoją Brykę
            </span>
          </Link>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 w-full max-w-md mx-auto">
        <Link
          to="/list"
          className="w-full sm:w-1/2 text-center px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-2"
        >
          📋 Zobacz listę samochodów
        </Link>

        <Link
          to="/form"
          className="w-full sm:w-1/2 text-center px-6 py-3 bg-accent text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-2"
        >
          ➕ Dodaj nowy samochód
        </Link>
      </div>
    </div>
  );
}
