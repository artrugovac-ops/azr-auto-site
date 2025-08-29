export type Car = {
  id: string;
  year: number;
  make: string;
  model: string;
  title: string;
  price: number;
  priceDisplay: string;
  odometer: number;
  vin: string;
  type: "Sedan" | "SUV" | "Truck" | "Coupe" | string;
  drivetrain: string;
  transmission: string;
  image: string;
  description: string;
};
