import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { CarList } from "./components/CarList/CarList";
import { CarForm } from "./components/CarForm/CarForm";
import { Home } from "./components/pages/Home";
import { Layout } from "./layout/Layout"; // ✅ Twój nowy wspólny layout
import cars from "../public/api/cars.json";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");

  const filteredCars = [...cars].filter(
    (c) =>
      c.brand.toLowerCase().includes(searchValue.toLowerCase().trim()) ||
      c.model.toLowerCase().includes(searchValue.toLowerCase().trim())
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
