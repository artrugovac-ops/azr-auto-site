import data from "@/data/cars.json"; import { Car } from "./types"; export const allCars: Car[] = data as unknown as Car[]; export function findCar(id:string){ return allCars.find(c=>c.id===id); }
