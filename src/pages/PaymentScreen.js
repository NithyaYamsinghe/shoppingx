import React from "react";
import PaymentForm from "../components/Payment/PaymentForm";
import PaymentTotal from "../components/Payment/PaymentTotal";
import { ShoppingConsumer } from "./../context/Context";

const PaymentScreen = () => {
  return (
    <ShoppingConsumer>
      {(value) => {
        const { items } = value;
        return (
          <div class="container">
            <div class="row">
              <div class="col">
                <PaymentForm items={items} />
              </div>
              <div class="col">
                <PaymentTotal />
              </div>
            </div>
          </div>
        );
      }}
    </ShoppingConsumer>
  );
};

export default PaymentScreen;
