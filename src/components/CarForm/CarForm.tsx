import React from "react";
import { useForm } from "react-hook-form";
import type { Car } from "../../types/Car";

export function CarForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Car>({
    defaultValues: {
      id: 0,
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

  const onSubmit = (data: Car) => {
    alert(JSON.stringify(data, null, 2));
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
          
          {/* Id */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Nr ID</label>
            <input
              type="number"
              {...register("id", { required: true })}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
            {errors.id && (
              <p className="text-accent text-sm mt-1">Nr ID jest wymagany</p>
            )}
          </div>

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

          {/* Zdjęcie */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Zdjęcie pojazdu</label>
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          
          {/* Nr rejestracyjny */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Numer rejestracyjny</label>
            <input
              {...register("registrationNumber")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* VIN */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Numer VIN</label>
            <input
              {...register("vin")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
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
            <input
              {...register("vehicleType")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
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
            <input
              {...register("fuelType")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
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
              {...register("firstRegistrationDate")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Ubezpieczenie do */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Koniec ubezpieczenia</label>
            <input
              type="date"
              {...register("insuranceValidUntil")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Przegląd do */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Koniec przeglądu</label>
            <input
              type="date"
              {...register("inspectionValidUntil")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Data zakupu */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Data zakupu</label>
            <input
              type="date"
              {...register("purchaseDate")}
              className="w-full px-3 py-2 rounded-md bg-white border border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
            />
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
