import http from "./HttpService";
import { apiUrl } from "./../config/Config.json";

const apiEndpoint_deliver = apiUrl + "users";

const apiEndpoint_payment = apiUrl + "payments";

const apiEndpoint_mobile_assign = apiUrl + "users";

const apiEndpoint_mobile_payment = apiUrl + "payments/mobile";

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

export function mobileAssign(mobileNumber, userId) {
  const carrierId = "353vU0iXrxSkwntQZOu2";
  return http.post(
    apiEndpoint_mobile_assign + "/" + userId + "/mobiles/assign",
    {
      carrierId,
      mobileNumber,
      userId,
    }
  );
}

export function mobilePayment(userId, items) {
  return http.post(apiEndpoint_mobile_payment, {
    userId,
    items,
  });
}
