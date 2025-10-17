import React from "react";
import type { Car } from "../../types/Car";

type Props = {
  cars: Car[];
  searchValue: string;
  setSearchValue: (value: string) => void;
  filterField: string;
  setFilterField: (value: string) => void;
};

export const CarList: React.FC<Props> = ({ 
  cars, 
  searchValue, 
  setSearchValue,
  filterField,
  setFilterField
  }) => {

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      {/* 🔹 Panel filtrów */}
      <aside className="bg-surface border border-gray-200 rounded-xl p-6 shadow-xl md:w-80 sticky top-4 h-fit">
        <h2 className="text-lg font-semibold text-textMain mb-4">Filtry</h2>

        <label className="block text-sm text-textMuted mb-1">Filtruj po:</label>
        <select
          value={filterField}
          onChange={(e) => setFilterField(e.target.value)}
          className="w-full mb-3 bg-background border border-gray-600 text-textMain rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary"
        >
          <option value="model">Model</option>
          <option value="brand">Marka</option>
          <option value="fuelType">Rodzaj paliwa</option>
          <option value="yearOfProduction">Rok produkcji</option>
        </select>

        <label className="block text-sm text-textMuted mb-1">
          {/* Wpisz wartość: */}
        </label>


        <input
          type="text"
          placeholder="Wpisz model lub markę..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </aside>

      {/* Lista samochodów */}
      <ul className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2 md:pr-4">
        {cars.map((c) => (
          <div
            key={c.id}
            className="flex flex-col sm:flex-row gap-6 bg-surface p-4 rounded-xl border border-gray-700 shadow-xl hover:shadow-xl transition-all duration-300"
          >
            {/* Zdjęcie */}
            <img
              className="w-full sm:w-32 h-40 sm:h-24 object-cover rounded-md"
              src="/images/car-angled-front-left-svgrepo-com.svg"
              alt={`${c.brand} ${c.model}`}
            />

            {/* Informacje */}
            <div className="flex flex-col justify-between flex-1">
              {/* Główne info */}
              <div className="flex justify-between flex-wrap gap-2">
                <div className="text-lg font-semibold">
                  <div>{`${c.brand} ${c.model}`}</div>
                  <div className="text-lg font-medium text-sm">
                    {`${c.engineCapacity} • ${c.enginePower}`}
                  </div>
                </div>
                <div className="text-textMuted font-bold text-lg">
                  {`${c.price} PLN`}
                </div>
              </div>

              {/* Dodatkowe informacje */}
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-textPlain">
                <div className="flex items-center gap-2">
                  <img
                    className="w-4 h-4 opacity-70"
                    src="/images/odometer-svgrepo-com.svg"
                    alt="mileage"
                  />
                  {`${c.mileage} km`}
                </div>

                <div className="flex items-center gap-2">
                  <img
                    className="w-4 h-4 opacity-70"
                    src="/images/fuel-dispenser-svgrepo-com.svg"
                    alt="fuel"
                  />
                  {c.fuelType}
                </div>

                <div className="flex items-center gap-2">
                  <img
                    className="w-4 h-4 opacity-70"
                    src="/images/transmission-svgrepo-com.svg"
                    alt="gearbox"
                  />
                  {c.transmission}
                </div>

                <div className="flex items-center gap-2">
                  <img
                    className="w-4 h-4 opacity-70"
                    src="/images/calendar-lines-svgrepo-com.svg"
                    alt="year"
                  />
                  {c.yearOfProduction}
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
