import React from "react";
import { useForm } from "react-hook-form";
import type { Car } from "../../types/Car"

import "./CarForm.css";

export function CarForm() {
  const {
    register,
    handleSubmit,
    watch,
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

  console.log(watch("model"));

  return (
    <form
      onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
      })}
    >
      <h1>Dodaj samochód</h1>

      <label>nr Id</label>
      <input
        {...register("id", { required: true})} />
        {errors.model && <p>nr Id jest wymagany</p>}
      
      <label>Model</label>
      <input
        {...register("model", { required: true, minLength: 3 })} />
        {errors.model && <p>Model jest wymagany (min. 3 znaki)</p>}
      
      <label>Marka</label>
      <input {...register("brand", { required: true, minLength:3 })} />
      {errors.brand && <p>brand jest wymagana</p>}

      <label>Dodaj zdjęcie</label>
      <input type="file" {...register("image")} />

      <label>Numer rejestracyjny</label>
      <input {...register("registrationNumber")} />

      <label>Numer VIN</label>
      <input {...register("vin")} />

      <label>Przebieg</label>
      <input type="number" {...register("mileage")} />

      <label>Cena</label>
      <input type="number" {...register("price")} />

      <label>Data wygaśnięcia ubezpieczenia</label>
      <input type="date" {...register("insuranceValidUntil")} />

      <label>Data wygaśnięcia przeglądu</label>
      <input type="date" {...register("inspectionValidUntil")} />

      <label>Data pierwszej rejestracji</label>
      <input type="date" {...register("firstRegistrationDate")} />

      <label>Rodzaj pojazdu</label>
      <input  {...register("vehicleType")} />

      <label>Rok produkcji</label>
      <input type="date" {...register("yearOfProduction")} />

      <label>Pojemność silnika</label>
      <input {...register("engineCapacity")} />

      <label>Moc silnika</label>
      <input {...register("enginePower")} />

      <label>Rodzaj paliwa</label>
      <input {...register("fuelType")} />

      <label>Liczba miejsc</label>
      <input type="number" {...register("numberOfSeats")} />

      <label>Rodzaj nadwozia</label>
      <input {...register("bodyType")} />

      <label>Skrzynia biegów</label>
      <input {...register("transmission")} />

      <label>Liczba drzwi</label>
      <input type="number" {...register("numberOfDoors")} />

      <label>Uwagi</label>
      <input {...register("notes")} />

      <label>Data zakupu</label>
      <input type="date" {...register("purchaseDate")} />

      <input type="submit" />
    </form>
  );
}
