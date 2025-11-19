import { useForm } from "react-hook-form";
import type { Car } from "../../types/Car";

export function CarForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Car>({
    defaultValues: {
      model: "",
      brand: "",
      image: undefined,
      registrationNumber: "",
      vin: "",
      mileage: 0,
      price: 0,
      insuranceValidUntil: "",
      inspectionValidUntil: "",
      firstRegistrationDate: "",
      vehicleType: "",
      yearOfProduction: 0,
      engineCapacity: "",
      enginePower: "",
      fuelType: "",
      numberOfSeats: 0,
      bodyType: "",
      transmission: "",
      numberOfDoors: 0,
      notes: "",
      purchaseDate: ""
    },
  });

  const onSubmit = async (data: Car) => {
    try {
      const body = {
        ...data,
        mileage: Number(data.mileage),
        price: Number(data.price),
        yearOfProduction: Number(data.yearOfProduction),
        numberOfSeats: Number(data.numberOfSeats),
        numberOfDoors: Number(data.numberOfDoors),
        firstRegistrationDate: new Date(data.firstRegistrationDate),
        purchaseDate: new Date(data.purchaseDate),
        insuranceValidUntil: new Date(data.insuranceValidUntil),
        inspectionValidUntil: new Date(data.inspectionValidUntil),
        image: data.image ? String(data.image) : "",
      };
  
      console.log("Body do wysłania:", body);

      const token = localStorage.getItem("token");
  
      const response = await fetch("https://kupietwojabryke.onrender.com/products", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        const text = await response.text();
        console.error("Response error:", text);
        throw new Error("Błąd przy zapisie samochodu");
      }
  
      const newCar = await response.json();
      console.log("Dodano samochód: ", newCar);
      alert("Samochód zapisany");
    } catch (error) {
      console.error(error);
      alert("Wystąpił błąd przy dodawaniu samochodu");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-surface p-8 rounded-xl border border-gray-600 shadow-md hover:shadow-lg transition-all duration-300"
      >
        <h1 className="text-2xl font-bold mb-6 text-primary text-center">
          Dodaj pojazd
        </h1>

        <div className="grid grid-cols-1 gap-6">

          {/* Marka */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Marka</label>
            <input
              {...register("brand", { required: true })}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
            {errors.brand && (
              <p className="text-accent text-sm mt-1">
                Marka jest wymagana
              </p>
            )}
          </div>

          {/* Model */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Model</label>
            <input
              {...register("model", { required: true, minLength: 2 })}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
            {errors.model && (
              <p className="text-accent text-sm mt-1">
                Model jest wymagany (min. 2 znaki)
              </p>
            )}
          </div>
          
          {/* Nr rejestracyjny */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Numer rejestracyjny</label>
            <input
              {...register("registrationNumber", { required: true})}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
            {errors.registrationNumber && (
              <p className="text-accent text-sm mt-1">
                Nr rejestracyjny jest wymagany
              </p>
            )}
          </div>

          {/* VIN */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Numer VIN</label>
            <input
              {...register("vin", { required: true})}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
            {errors.vin && (
              <p className="text-accent text-sm mt-1">
                Nr VIN jest wymagany
              </p>
            )}
          </div>

          {/* Cena */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Cena</label>
            <input
              type="number"
              {...register("price")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Rok produkcji */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Rok produkcji</label>
            <input
              type="number"
              {...register("yearOfProduction")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Przebieg */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Przebieg (km)</label>
            <input
              type="number"
              {...register("mileage")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Rodzaj pojazdu */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Rodzaj pojazdu</label>
            <select
              {...register("vehicleType", { required: true })}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option value="">-- Wybierz rodzaj pojazdu --</option>
              <option value="osobowy">Osobowy</option>
              <option value="dostawczy">Dostawczy</option>
              <option value="ciężarowy">Ciężarowy</option>
              <option value="motocykl">Motocykl</option>
              <option value="quad">Quad</option>
              <option value="autobus">Autobus</option>
              <option value="inne">Inne</option>
            </select>

            {errors.vehicleType && (
              <p className="text-accent text-sm mt-1">Wybierz rodzaj pojazdu</p>
            )}
          </div>

          {/* Pojemność silnika */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Pojemność silnika</label>
            <input
              {...register("engineCapacity")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Moc silnika */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Moc silnika</label>
            <input
              {...register("enginePower")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Rodzaj paliwa */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Rodzaj paliwa</label>
            <select
              {...register("fuelType", { required: true })}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none">
              <option value="">-- Wybierz rodzaj paliwa --</option>
              <option value="Benzyna">Benzyna</option>
              <option value="Benzyna i gaz">Benzyna i gaz</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybryda">Hybryda</option>
              <option value="Elektryczne">Elektryczne</option>
            </select>

            {errors.fuelType && (
              <p className="text-accent text-sm mt-1">Wybierz rodzaj paliwa</p>
            )}
          </div>

          {/* Typ nadwozia */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Typ nadwozia</label>
            <input
              {...register("bodyType")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Skrzynia biegów */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Skrzynia biegów</label>
            <input
              {...register("transmission")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Liczba miejsc */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Liczba miejsc</label>
            <input
              type="number"
              {...register("numberOfSeats")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Liczba drzwi */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Liczba drzwi</label>
            <input
              type="number"
              {...register("numberOfDoors")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Data pierwszej rejestracji */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Data pierwszej rejestracji</label>
            <input
              type="date"
              {...register("firstRegistrationDate", { required: true })}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />

            {errors.firstRegistrationDate && (
              <p className="text-accent text-sm mt-1">Podaj datę pierwszej rejestracji</p>
            )}
          </div>

          {/* Ubezpieczenie do */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Koniec ubezpieczenia</label>
            <input
              type="date"
              {...register("insuranceValidUntil", { required: true })}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />

            {errors.insuranceValidUntil && (
              <p className="text-accent text-sm mt-1">Podaj datę końca ubezpieczenia</p>
            )}
          </div>

          {/* Przegląd do */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Koniec przeglądu</label>
            <input
              type="date"
              {...register("inspectionValidUntil", { required: true })}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />

            {errors.inspectionValidUntil && (
              <p className="text-accent text-sm mt-1">Podaj datę końca przeglądu</p>
            )}
          </div>

          {/* Data zakupu */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Data zakupu</label>
            <input
              type="date"
              {...register("purchaseDate", { required: true })}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />

            {errors.purchaseDate && (
              <p className="text-accent text-sm mt-1">Podaj datę zakupu</p>
            )}
          </div>
        </div>

        {/* Przycisk */}
        <button
          type="submit"
          className="mt-8 w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-md font-semibold tracking-wider transition"
        >
          Zapisz samochód
        </button>
      </form>
    </div>
  );
}
