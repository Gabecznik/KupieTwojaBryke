import React from "react";
import './CarList.scss';
//import cars from '../../../public/api/cars.json'
import type { Car } from "../../types/Car";

type Props = {
    cars: Car[],
    searchValue: string,
    setSearchValue: (value: string) => void
}

export const CarList: React.FC<Props> = ({ cars, searchValue, setSearchValue }) => {
    return (
        <div className="car-list__content">
            <div className="car-list__filter">
                <h1 className="car-list__filter-title">Filtry</h1>
                <input 
                    type="text" 
                    placeholder="Wpisz model lub markę" 
                    value={searchValue} 
                    onChange={e => setSearchValue(e.target.value)}
                    className="car-list__text-input"
                />
            </div>
            <ul className="car-list__list">
                {cars.map(c =>
                    <div key={c.id} className="car-list__element">
                        <img className="car-list__car-image" src="public\images\car-angled-front-left-svgrepo-com.svg" />
                        <div className="car-list__car-info">
                            <div className="car-list__initial-info">
                                <div className="car-list__title-info">
                                    <div className="car-list__title">
                                        {`${c.brand} ${c.model}`}
                                    </div>
                                    <div className="car-list__secondary-info">
                                        {`${c.engineCapacity} - ${c.enginePower} - ${c.brand} ${c.model}`}
                                    </div>
                                </div>
                                <div className="car-list__price">
                                    {`${c.price} PLN`}
                                </div>
                            </div>
                            <div className="car-list__additional-info">
                                <div>
                                    <img className="car-list__info-emoji" src="\public\images\odometer-svgrepo-com.svg" />
                                    {`${c.mileage} km`}
                                </div>
                                <div>
                                    <img className="car-list__info-emoji" src="public\images\fuel-dispenser-svgrepo-com.svg" />
                                    {c.fuelType}
                                </div>
                                <div>
                                    <img className="car-list__info-emoji" src="public\images\transmission-svgrepo-com.svg" />
                                    {c.transmission}
                                </div>
                                <div>
                                    <img className="car-list__info-emoji" src="public\images\calendar-lines-svgrepo-com.svg" />
                                    {c.yearOfProduction}
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </ul>
        </div>
    )
}