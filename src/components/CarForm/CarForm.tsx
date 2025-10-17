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
        className="w-full max-w-2xl bg-surface p-8 rounded-2xl shadow-lg border border-gray-700"
      >
        <h1 className="text-2xl font-bold mb-6 text-primary text-center">
          Dodaj samochód
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

          {/* Przebieg */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Przebieg (km)</label>
            <input
              type="number"
              {...register("mileage")}
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

          {/* Skrzynia biegów */}
          <div>
            <label className="block mb-1 text-sm text-textMuted">Skrzynia biegów</label>
            <input
              {...register("transmission")}
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
