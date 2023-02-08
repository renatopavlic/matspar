import { transformToProductImage } from "@/helpers";
import { Product } from "@/types/Product";

export const transformToProduct = (products: any): Product[] => {
  console.log("transformation started");
  if (!products) {
    return [];
  }
  return products.map((p: any) => ({
    id: p.id,
    name: p.name,
    brand: p.brand,
    imageUrl: transformToProductImage(p.image),
    price: p.price,
  }));
};
