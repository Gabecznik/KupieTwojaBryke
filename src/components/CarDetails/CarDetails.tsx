import { useParams, Link } from "react-router-dom";
import cars from "../../../public/api/cars.json"; 
import { CarTasks } from "../CarTasks/CarTasks";

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
        className="w-full max-w-2xl bg-surface p-8 rounded-xl border border-gray-600 
                   shadow-md hover:shadow-lg transition-all duration-300"
        >
        
        {/* Zdjęcie */}
            <img
                className="w-[600px] h-[300px] object-cover rounded-md shadow-md"
                src="/images/car-angled-front-left-svgrepo-com.svg"
                alt={`${car.brand} ${car.model}`}
            />

    
    <div className="flex flex-col gap-4 text-textPlain text-left items-center w-full">
    {/* Nagłówek */}
    <div className="w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-textMuted mt-4 mb-6">
        {car.brand} <span className="text-primary">{car.model}</span>
        </h1>
    </div>

    {/* Dane samochodu */}
        <div className="w-full max-w-md space-y-2">
            <p><span className="text-textMuted">Numer rejestracyjny:</span> {car.registrationNumber}</p>
            <p><span className="text-textMuted">Numer VIN:</span> {car.vin}</p>
            <p><span className="text-textMuted">Cena:</span> {car.price} PLN</p>
            <p><span className="text-textMuted">Przebieg:</span> {car.mileage} km</p>
            <p><span className="text-textMuted">Rok produkcji:</span> {car.yearOfProduction}</p>
            <p><span className="text-textMuted">Rodzaj pojazdu:</span> {car.vehicleType}</p>
            <p><span className="text-textMuted">Pojemność silnika:</span> {car.engineCapacity}</p>
            <p><span className="text-textMuted">Moc silnika:</span> {car.enginePower}</p>
            <p><span className="text-textMuted">Rodzaj paliwa:</span> {car.fuelType}</p>
            <p><span className="text-textMuted">Typ nadwozia:</span> {car.bodyType}</p>
            <p><span className="text-textMuted">Skrzynia biegów:</span> {car.transmission}</p>
            <p><span className="text-textMuted">Liczba miejsc:</span> {car.numberOfSeats}</p>
            <p><span className="text-textMuted">Liczba drzwi:</span> {car.numberOfDoors}</p>
            <p><span className="text-textMuted">Ubezpieczenie do:</span> {car.insuranceValidUntil}</p>
            <p><span className="text-textMuted">Przegląd do:</span> {car.inspectionValidUntil}</p>
            <p><span className="text-textMuted">Data pierwszej rejestracji:</span> {car.firstRegistrationDate}</p>
            <p>
            <span className="text-textMuted">Data zakupu:</span>
            <span className="ml-2 bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-md">
                {car.purchaseDate}
            </span>
            </p>
        </div>
    </div>

               
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
                                
    {/* Zadania */}
        <CarTasks carId={Number(car.id)} />

    {/* Back button */}
            <div className="mt-4 flex justify-center">
                <Link to="/list"
                    className="mt-4 w-full md:w-auto text-center bg-primary hover:bg-blue-700 
                        text-white font-semibold py-2 px-6 rounded-md 
                        transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                    Wróć do listy
                </Link>
            </div>

        </div>
    </div>
  );
}
