import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { CarList } from "./components/CarList/CarList";
import { CarForm } from "./components/CarForm/CarForm";
import { Home } from "./components/pages/Home";
import { Layout } from "./layout/Layout";
import { CarDetails } from "./components/CarDetails/CarDetails";
import type { Car } from "./types/Car";

function App() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then(setCars)
      .catch((err) => console.error("Błąd pobierania danych:", err));
  }, []);
  
  const [brandSearch, setBrandSearch] = useState("");
  const [modelSearch, setModelSearch] = useState("");

  const [priceFrom, setPriceFrom] = useState<string>("");
  const [priceTo, setPriceTo] = useState<string>("");

  const [yearFrom, setYearFrom] = useState<string>("");
  const [yearTo, setYearTo] = useState<string>("");

  const [fuelType, setFuelType] = useState("");
  const [bodyType, setBodyType] = useState("");


  const filteredCars = cars.filter((c) => {
  const brandOk =
    !brandSearch || c.brand.toLowerCase().includes(brandSearch.toLowerCase());

  const modelOk =
    !modelSearch || c.model.toLowerCase().includes(modelSearch.toLowerCase());

  const priceOk =
    (!priceFrom || c.price >= Number(priceFrom)) &&
    (!priceTo || c.price <= Number(priceTo));

  const yearOk =
    (!yearFrom || c.yearOfProduction >= Number(yearFrom)) &&
    (!yearTo || c.yearOfProduction <= Number(yearTo));

  const fuelOk =
    !fuelType || c.fuelType.toLowerCase() === fuelType.toLowerCase();

  const bodyOk =
    !bodyType || c.bodyType.toLowerCase() === bodyType.toLowerCase();

  return brandOk && modelOk && priceOk && yearOk && fuelOk && bodyOk;
});



  return (
    <BrowserRouter basename="/KupieTwojaBryke">
      <Routes>
        <Route element={<Layout />}>
          {/* 🔹 Strona główna */}
          <Route path="/" element={<Home />} />

          {/* 🔹 Lista samochodów */}
          <Route
            path="/list"
            element={
              <CarList
                  cars={filteredCars}
                  brandSearch={brandSearch}
                  setBrandSearch={setBrandSearch}
                  modelSearch={modelSearch}
                  setModelSearch={setModelSearch}
                  priceFrom={priceFrom}
                  setPriceFrom={setPriceFrom}
                  priceTo={priceTo}
                  setPriceTo={setPriceTo}
                  yearFrom={yearFrom}
                  setYearFrom={setYearFrom}
                  yearTo={yearTo}
                  setYearTo={setYearTo}
                  fuelType={fuelType}
                  setFuelType={setFuelType}
                  bodyType={bodyType}
                  setBodyType={setBodyType}
              />
            }
          />

          {/* 🔹 Formularz dodawania samochodu */}
        <Route path="/list/:id" element={<CarDetails cars={cars}/>} />
          <Route path="/form" element={<CarForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
