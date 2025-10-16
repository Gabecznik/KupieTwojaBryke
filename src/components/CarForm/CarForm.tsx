import React from "react";
import { useForm } from "react-hook-form";

import "./CarForm.css";

type CarFormData = {
  model: string;
  marka: string;
  zdjecie?: FileList;
  rejestracyjny: string;
  vin: string;
  przebieg: number;
  cena: number;
  ubezpieczenie: string;
  przeglad: string;
  pierwszaRejestracja: string;
}

function CarForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CarFormData>({
    defaultValues: {
      model: "",
      marka: "",
      zdjecie: undefined,
      rejestracyjny: "",
      vin: "",
      przebieg: 0,
      cena: 0,
      ubezpieczenie: "",
      przeglad: "",
      pierwszaRejestracja: "",

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
      
      <label>Model</label>
      <input
        {...register("model", { required: true, minLength: 3 })} />
        {errors.model && <p>Model jest wymagany (min. 3 znaki)</p>}
      
      <label>Marka</label>
      <input {...register("marka", { required: true, minLength:3 })} />
      {errors.marka && <p>Marka jest wymagana</p>}

      <label>Dodaj zdjęcie</label>
      <input type="file" {...register("zdjecie")} />

      <label>Numer rejestracyjny</label>
      <input {...register("rejestracyjny")} />

      <label>Numer VIN</label>
      <input {...register("vin")} />

      <label>Przebieg</label>
      <input type="number" {...register("przebieg")} />

      <label>Cena</label>
      <input type="number" {...register("cena")} />

      <label>Data wygaśnięcia ubezpieczenia</label>
      <input type="date" {...register("ubezpieczenie")} />

      <label>Data wygaśnięcia przeglądu</label>
      <input type="date" {...register("przeglad")} />

      <label>Data pierwszej rejestracji</label>
      <input type="date" {...register("pierwszaRejestracja")} />

      <input type="submit" />
    </form>
  );
}

export default CarForm;
