import { transformToProductImage } from "@/helpers";
import { Product } from "@/types/Product";

export const transformToProduct = (products: any): Product[] => {
  if (!products) {
    return [];
  }

  if (Array.isArray(products) && products.length) {
    return products.map((p: any) => ({
      id: p.id,
      name: p.name,
      brand: p.brand,
      imageUrl: transformToProductImage(p.image),
      price: p.price,
    }));
  }

  if (typeof products === "object" && products.products) {
    return products.products.map((p: any) => ({
      id: p.id,
      name: p.name,
      brand: p.brand,
      imageUrl: transformToProductImage(p.image),
      price: p.price,
    }));
  }

  return [];
};
