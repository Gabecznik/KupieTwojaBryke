export type Car = {
    id: number,
    brand: string, // marka !
    model: string, // model !
    image: string, // zdjęcie 
    registrationNumber: string, // nr rejestracyjny !
    vin: string,  //VIN
    mileage: number, // przebieg !
    price: number,  // cena !
    insuranceValidUntil: string, // koniec ubezpieczenia !
    inspectionValidUntil: string, // koniec przeglądu !
    firstRegistrationDate: string, // pierwsza rejestracja
    vehicleType: string, // rodzaj pojazdu !
    yearOfProduction: number, // rok produkcji !
    engineCapacity: string, // pojemność silnika !
    enginePower: string, // moc silnika
    fuelType: string, // rodzaj paliwa !
    numberOfSeats: number, // liczba miejsc
    bodyType: string, // typ nadwozia !
    transmission: string, // skrzynia biegów !
    numberOfDoors: number, // liczba drzwi
    notes: string, // uwagi
    purchaseDate: string // data zakupu
}