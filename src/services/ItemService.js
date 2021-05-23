import http from "./HttpService";
import { apiUrl } from "./../config/Config.json";

const apiEndpoint_get_items = apiUrl + "items";
const apiEndpoint_get_categories = apiUrl + "categories";

export function getItems() {
  return http.get(apiEndpoint_get_items);
}

export function getItem(itemId) {
  return http.get(apiEndpoint_get_items + "/" + itemId);
}

export function getItemSByCategory(categoryId) {
  return http.get(apiEndpoint_get_items + "/categories/" + categoryId);
}

export function getCategories() {
  return http.get(apiEndpoint_get_categories);
}
