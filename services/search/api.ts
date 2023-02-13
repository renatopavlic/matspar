import { BASE_URL } from "./../../consts";
import { transformToOptions } from "./transformations";

// keep getting CORS error, but in Postman it returns results with suggestions
export const getRecentSearch = async (query: string = "") => {
  const response = await fetch(`${BASE_URL}/autocomplete?query=${query}`);
  const result = await response.json();
  return transformToOptions(result);
};
