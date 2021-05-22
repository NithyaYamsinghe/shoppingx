import http from "./HttpService";
import { apiUrl } from "./../config/Config.json";

const apiEndpoint_get_user = apiUrl + "users/";

export function getUser(userId) {
  return http.get(apiEndpoint_get_user + userId);
}
