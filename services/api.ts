import { transformToProduct } from "./transformation";
import { BASE_URL } from "@/consts";

export const getAllProducts = async (query?: any) => {
  const response = await fetch(`${BASE_URL}/slug`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slug: "/kategori", query: { q: query ?? "" } }),
  });
  const { payload } = await response.json();
  return transformToProduct(payload);
};
