import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="home">
      <div className="h-40 flex items-center justify-center bg-background text-textMain rounded-lg shadow-md">
  Test kolorów 🎨 bg-background + text-textMain
</div>
      <h1>Witaj w aplikacji Komis Samochodowy 🚗</h1>
      <p>Wybierz, co chcesz zrobić:</p>
      <div className="home-buttons">
        <Link to="/cars" className="btn">
          📋 Zobacz listę samochodów
        </Link>
        <Link to="/add" className="btn">
          ➕ Dodaj nowy samochód
        </Link>
      </div>
    </div>
  );
}
