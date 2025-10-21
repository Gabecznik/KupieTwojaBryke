-- CreateTable
CREATE TABLE "cars" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "vin" TEXT NOT NULL,
    "mileage" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "insuranceValidUntil" TIMESTAMP(3) NOT NULL,
    "inspectionValidUntil" TIMESTAMP(3) NOT NULL,
    "firstRegistrationDate" TIMESTAMP(3) NOT NULL,
    "vehicleType" TEXT NOT NULL,
    "yearOfProduction" INTEGER NOT NULL,
    "engineCapacity" TEXT NOT NULL,
    "enginePower" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "numberOfSeats" INTEGER NOT NULL,
    "bodyType" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "numberOfDoors" INTEGER NOT NULL,
    "notes" TEXT,
    "purchaseDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cars_registrationNumber_key" ON "cars"("registrationNumber");

-- CreateIndex
CREATE UNIQUE INDEX "cars_vin_key" ON "cars"("vin");
