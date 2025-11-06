import { apiFetch } from "./apiClient";
import type { Car } from "../types/Car";

export const ProductAPI = {
  async getAll(): Promise<Car[]> {
    return apiFetch<Car[]>("/products");
  },

  async getById(id: number): Promise<Car> {
    return apiFetch<Car>(`/products/${id}`);
  },

  async create(car: Omit<Car, "id">): Promise<Car> {
    return apiFetch<Car>("/products", {
      method: "POST",
      body: JSON.stringify(car),
    });
  },

  async delete(id: number): Promise<void> {
    return apiFetch(`/products/${id}`, { method: "DELETE" });
  },
};
