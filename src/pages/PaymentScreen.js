import React from "react";
import PaymentForm from "../components/Payment/PaymentForm";
import PaymentTotal from "../components/Payment/PaymentTotal";

const PaymentScreen = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <PaymentForm />
        </div>
        <div class="col">
          <PaymentTotal />
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen;
