import http from "./HttpService";
import { apiUrl } from "./../config/Config.json";

const apiEndpoint_deliver = apiUrl + "users";

const apiEndpoint_payment = apiUrl + "payments";

export function setDeliverInfo(
  userId,
  addressLine1,
  addressLine2,
  city,
  state,
  province,
  zip,
  country
) {
  return http.post(apiEndpoint_deliver + "/" + userId + "/addresses/assign", {
    addressLine1,
    addressLine2,
    city,
    state,
    province,
    zip,
    country,
  });
}

export function cardPayment(
  cardName,
  cardNumber,
  cvc,
  expMonth,
  expYear,
  country,
  email,
  cart
) {
  return http.post(apiEndpoint_payment + "/card", {
    cardName,
    cardNumber,
    cvc,
    expMonth,
    expYear,
    country,
    email,
    cart,
  });
}
