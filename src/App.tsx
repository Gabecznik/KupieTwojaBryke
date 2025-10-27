import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { CarList } from "./components/CarList/CarList";
import { CarForm } from "./components/CarForm/CarForm";
import { Home } from "./components/pages/Home";
import { Layout } from "./layout/Layout";
import { CarDetails } from "./components/CarDetails/CarDetails";
import cars from "../public/api/cars.json";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterField, setFilterField] = useState<string>("brand")

  const [priceFrom, setPriceFrom] = useState<string>("");
  const [priceTo, setPriceTo] = useState<string>("");

  const [yearFrom, setYearFrom] = useState<string>("");
  const [yearTo, setYearTo] = useState<string>("");


  const filteredCars = cars.filter((c) => {
  const val = searchValue.toLowerCase().trim();

  // 💰 Zakres ceny
  const priceOk =
    (!priceFrom || c.price >= Number(priceFrom)) &&
    (!priceTo || c.price <= Number(priceTo));

  // 📅 Zakres roku
  const yearOk =
    (!yearFrom || c.yearOfProduction >= Number(yearFrom)) &&
    (!yearTo || c.yearOfProduction <= Number(yearTo));

  // 🔹 Jeśli nie wpisano nic w polu tekstowym – filtruj tylko po cenie/roku
  if (!val) {
    return priceOk && yearOk;
  }

  // 🔹 Dotychczasowe filtrowanie tekstowe
  switch (filterField) {
    case "model":
      return priceOk && yearOk && c.model.toLowerCase().includes(val);
    case "registrationNumber":
      return priceOk && yearOk && c.registrationNumber.toLowerCase().includes(val);
    case "mileage":
      return priceOk && yearOk && String(c.mileage).includes(val);
    case "price":
      return priceOk && yearOk && String(c.price).includes(val);
    case "insuranceValidUntil":
      return priceOk && yearOk && c.insuranceValidUntil.toLowerCase().includes(val);
    case "inspectionValidUntil":
      return priceOk && yearOk && c.inspectionValidUntil.toLowerCase().includes(val);
    case "vehicleType":
      return priceOk && yearOk && c.vehicleType.toLowerCase().includes(val);
    case "yearOfProduction":
      return priceOk && yearOk && String(c.yearOfProduction).includes(val);
    case "engineCapacity":
      return priceOk && yearOk && c.engineCapacity.toString().includes(val);
    case "fuelType":
      return priceOk && yearOk && c.fuelType.toLowerCase().includes(val);
    case "bodyType":
      return priceOk && yearOk && c.bodyType.toLowerCase().includes(val);
    case "transmission":
      return priceOk && yearOk && c.transmission.toLowerCase().includes(val);
    default:
      return priceOk && yearOk && c.brand.toLowerCase().includes(val);
  }
});


  return (
    <BrowserRouter>
      {/* ✅ Layout otacza wszystkie podstrony */}
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
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                filterField={filterField}
                setFilterField={setFilterField}
                priceFrom={priceFrom}
                setPriceFrom={setPriceFrom}
                priceTo={priceTo}
                setPriceTo={setPriceTo}
                yearFrom={yearFrom}
                setYearFrom={setYearFrom}
                yearTo={yearTo}
                setYearTo={setYearTo}
              />
            }
          />

          {/* 🔹 Formularz dodawania samochodu */}
        <Route path="/list/:id" element={<CarDetails />} />
          <Route path="/form" element={<CarForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
