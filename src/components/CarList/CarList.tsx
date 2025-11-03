import React, { useState } from "react";
import type { Car } from "../../types/Car";
import { Link } from "react-router-dom";
// import { Loader } from "../Loader/Loader";

type Props = {
  cars: Car[];
  brandSearch: string;
  setBrandSearch: (value: string) => void;
  modelSearch: string;
  setModelSearch: (value: string) => void;
  priceFrom: string;
  setPriceFrom: (value: string) => void;
  priceTo: string;
  setPriceTo: (value: string) => void;
  yearFrom: string;
  setYearFrom: (value: string) => void;
  yearTo: string;
  setYearTo: (value: string) => void;
  fuelType: string;
  setFuelType: (value: string) => void;
  bodyType: string;
  setBodyType: (value: string) => void;
};

export const CarList: React.FC<Props> = ({
  cars,
  brandSearch,
  setBrandSearch,
  modelSearch,
  setModelSearch,
  priceFrom,
  setPriceFrom,
  priceTo,
  setPriceTo,
  yearFrom,
  setYearFrom,
  yearTo,
  setYearTo,
  fuelType,
  setFuelType,
  bodyType,
  setBodyType,
}) => {
  const [showFilters, setShowFilters] = useState(false);


  return (
    <div className="flex flex-col md:flex-row gap-6 w-full relative">
      {/* 🔹 Mobilny przycisk pokazujący filtry */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="md:hidden self-end mb-3 bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-accent transition-all"
      >
        {showFilters ? "Ukryj filtry" : "Pokaż filtry"}
      </button>

      {/* 🔹 Panel boczny */}
      <aside
        className={`
          bg-surface rounded-xl p-6 shadow-xl 
          transition-all duration-300
          md:sticky md:top-4 md:h-fit
          w-full md:w-[300px] lg:w-[340px] 2xl:w-[380px]
          ${showFilters ? "block" : "hidden md:block"}
        `}
      >
        {/* <h2 className="text-xl font-semibold text-textMain mb-6">Filtry</h2> */}

        <div className="flex flex-col gap-6">
          {/* Podstawowe dane */}
            <div className="grid grid-cols-1 gap-4">
              {/* Marka */}
              <input
                type="text"
                placeholder="Marka"
                value={brandSearch}
                onChange={(e) => {
                  setBrandSearch(e.target.value)
                }}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              {/* Model */}
              <input
                type="text"
                placeholder="Model"
                value={modelSearch}
                onChange={(e) => {
                  setModelSearch(e.target.value)
                }}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

          {/* Parametry */}
            <div className="grid grid-cols-1 gap-4">
              {/* Cena */}
              <div className="flex flex-col gap-3">

              <div className="grid grid-cols-2 gap-3">
                {/* Cena od */}
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Cena od"
                  value={priceFrom}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setPriceFrom(value);
                  }}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />

                {/* Cena do */}
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Cena do"
                  value={priceTo}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setPriceTo(value);
                  }}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

              {/* Rok */}
              <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Rok od"
                    value={yearFrom}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      setYearFrom(value);
                    }}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />

                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Rok do"
                    value={yearTo}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      setYearTo(value);
                    }}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Paliwo */}
              <select
                value={fuelType}
                onChange={(e) => {
                  setFuelType(e.target.value)
                }}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="" disabled selected hidden>
                  Rodzaj paliwa...
                </option>
                <option value="Benzyna">Benzyna</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybryda">Hybryda</option>
                <option value="Elektryczny">Elektryczny</option>
              </select>

              {/* Nadwozie */}
              <select
                value={bodyType}
                onChange={(e) => {
                  setBodyType(e.target.value)
                }}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="" disabled selected hidden>
                  Typ nadwozia...
                </option>
                <option value="Sedan">Sedan</option>
                <option value="Kombi">Kombi</option>
                <option value="SUV">SUV</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Coupe">Coupe</option>
                <option value="Van">Van</option>
              </select>
            </div>
          </div>
        {/* 🔹 Przycisk czyszczenia filtrów */}
    <button
      onClick={() => {
        setBrandSearch("");
        setModelSearch("");
        setPriceFrom("");
        setPriceTo("");
        setYearFrom("");
        setYearTo("");
        setFuelType("");
        setBodyType("");
      }}
      className="mt-6 w-full bg-primary text-white py-2 rounded-md hover:bg-accent transition-colors duration-200 shadow-md"
        >
        Wyczyść filtry
    </button>
      </aside>

      {/* 🔹 Lista samochodów */}
      <ul className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2 md:pr-4">
        {cars.map((c) => (
          <li key={c.id} className="w-full">
            <Link
              to={`/list/${c.id}`}
              className="w-full flex flex-col sm:flex-row gap-6 
                 bg-surface p-4 rounded-xl  
                 shadow-md hover:shadow-lg hover: 
                 transition-all duration-300"
            >
              <img
                className="w-full sm:w-40 h-40 sm:h-28 object-cover rounded-md"
                src="/images/car-angled-front-left-svgrepo-com.svg"
                alt={`${c.brand} ${c.model}`}
              />

              <div className="flex flex-col justify-between flex-1">
                <div className="flex justify-between flex-wrap gap-2">
                  <div className="text-lg font-semibold">
                    <div>{`${c.brand} ${c.model}`}</div>
                    <div className="text-sm text-gray-400">{`${c.engineCapacity} • ${c.enginePower}`}</div>
                  </div>
                  <div className="text-textMuted font-bold text-lg">{`${c.price} PLN`}</div>
                </div>

                <div className="flex flex-wrap gap-4 mt-3 text-sm text-textPlain">
                  <div>{`${c.mileage} km`}</div>
                  <div>{c.fuelType}</div>
                  <div>{c.transmission}</div>
                  <div>{c.yearOfProduction}</div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
