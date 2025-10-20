import { useParams, Link } from "react-router-dom";
import cars from "../../../public/api/cars.json"; // dostosuj ścieżkę

export function CarDetails() {
  const { id } = useParams<{ id: string }>();
  const car = cars.find((c) => String(c.id) === id);

  if (!car) {
    return (
      <div className="p-8 text-center text-gray-300">
        <h2 className="text-xl font-semibold mb-2">Nie znaleziono pojazdu</h2>
        <Link to="/list" className="text-blue-400 hover:text-blue-300 underline">← Wróć do listy</Link>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full min-h-[calc(100vh-100px)] p-6">
        <div
        className="w-full h-full flex flex-col items-center gap-6 
                   bg-surface p-6 rounded-xl border border-gray-700 
                   shadow-xl hover:shadow-2xl transition-all duration-300"
        >
        
        {/* Zdjęcie */}
            <img
                className="w-[600px] h-[300px] object-cover rounded-md shadow-md"
                src="/images/car-angled-front-left-svgrepo-com.svg"
                alt={`${car.brand} ${car.model}`}
            />

        {/* Dane samochodu */}
            <div className="w-full flex items-center flex-col gap-3 text-textPlain text-left">
                <h1 className="text-3xl font-bold text-textMuted mb-4 text-left">
                    {car.brand} {car.model}
                </h1>
                <p><strong>Numer rejestracyjny: </strong> {car.registrationNumber}</p>
                <p><strong>Numer VIN: </strong>{car.vin}</p>
                <p><strong>Przebieg: </strong> {car.mileage} km</p>
                <p><strong>Cena: </strong> {car.price} PLN</p>
                <p><strong>Rok produkcji: </strong> {car.yearOfProduction}</p>
                <p><strong>Rodzaj pojazdu: </strong>{car.vehicleType}</p>
                <p><strong>Pojemność silnika: </strong>{car.engineCapacity}</p>
                <p><strong>Moc silnika: </strong>{car.enginePower}</p>
                <p><strong>Rodzaj paliwa: </strong> {car.fuelType}</p>
                <p><strong>Typ nadwozia: </strong> {car.bodyType}</p>
                <p><strong>Skrzynia biegów: </strong> {car.transmission}</p>
                <p><strong>Liczba miejsc: </strong>{car.numberOfSeats}</p>
                <p><strong>Liczba drzwi: </strong>{car.numberOfDoors}</p>
                <p><strong>Ubezpieczenie do: </strong> {car.insuranceValidUntil}</p>
                <p><strong>Przegląd do: </strong> {car.inspectionValidUntil}</p>
                <p><strong>Data pierwszej rejestracji: </strong>{car.firstRegistrationDate}</p>
                <p>
                    <strong>Data zakupu: </strong>
                    <span className="bg-blue-500/20 test-blue-400 px-2 py-0.5 rounded-md">
                        {car.purchaseDate}
                    </span>
                </p>
               
                {car.notes && (
                    <div
                        className="w-full bg-white text-center text-gray-800 p-4 rounded-lg shadow-lg mt-6
                            border border-gray-200 relative 
                            before:content-[''] before:absolute 
                            before:-top-2 
                            before:left-4 
                            before:w-3 
                            before:h-3 
                            before:rounded-full 
                            before:bg-accent"
                        >
                        <h2 className="text-lg font-semibold mb-2">Uwagi</h2>
                        <p className="whitespace-pre-line leading-relaxed">{car.notes}</p>
                        </div>
                        )}
                                        
            </div>

      <Link to="/list" className="mt-6 inline-block text-blue-600 underline">
        ← Wróć do listy
      </Link>
    </div>
    </div>
  );
}
