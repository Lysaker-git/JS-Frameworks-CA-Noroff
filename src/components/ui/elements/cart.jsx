import { useEffect } from "react";
import { create } from "zustand"; 

export const useCartStore = create((set) => ({
    products: [],
    addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
    removeProduct: (productId) =>
      set((state) => ({
        products: state.products.filter((product) => product.id !== productId),
      })),
  }));
  