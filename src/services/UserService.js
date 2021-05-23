import http from "./HttpService";
import { apiUrl } from "./../config/Config.json";

const apiEndpoint_get_user = apiUrl + "users";

export function getUser(userId) {
  return http.get(apiEndpoint_get_user + "/" + userId);
}

export function createUser(lastName, firstName, uid, userType) {
  return http.post(apiEndpoint_get_user, {
    lastName,
    firstName,
    uid,
    userType,
  });
}

// to get token
export function getToken() {
  return localStorage.getItem("token");
}

//fixing bi directional dependancies
http.setToken(getToken());
