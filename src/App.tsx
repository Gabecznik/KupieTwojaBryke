import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { CarList } from "./components/CarList/CarList";
import { CarForm } from "./components/CarForm/CarForm";
import { Home } from "./components/pages/Home";
import { Layout } from "./layout/Layout"; // ✅ Twój nowy wspólny layout
import cars from "../public/api/cars.json";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterField, setFilterField] = useState<string>("brand")

  const filteredCars = cars.filter(
    (c) => {
      const val = searchValue.toLocaleLowerCase().trim();

      if (!val) return true;

      switch (filterField) {
        case "model":
          return c.model.toLowerCase().includes(val);
        case "registrationNumber":
          return c.registrationNumber.toLowerCase().includes(val);
        case "mileage":
          return String(c.mileage).includes(val);
        case "price":
          return String(c.price).includes(val);
        case "insuranceValidUntil":
          return c.insuranceValidUntil.toLowerCase().includes(val);
        case "inspectionValidUntil":
          return c.inspectionValidUntil.toLowerCase().includes(val);
        case "vehicleType":
          return c.vehicleType.toLowerCase().includes(val);
        case "yearOfProduction":
          return String(c.yearOfProduction).includes(val);
        case "engineCapacity":
          return c.engineCapacity.toString().includes(val);
        case "fuelType":
          return c.fuelType.toLowerCase().includes(val);
        case "bodyType":
          return c.bodyType.toLowerCase().includes(val);
        case "transmission":
          return c.transmission.toLowerCase().includes(val);
        default:
          return c.brand.toLowerCase().includes(val);
      }
    }
   );

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
              />
            }
          />

          {/* 🔹 Formularz dodawania samochodu */}
          <Route path="/form" element={<CarForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
