import React from "react";
import { ShoppingConsumer } from "./../../context/Context";

const PaymentTotal = () => {
  return (
    <ShoppingConsumer>
      {(value) => {
        const { cartTotal, cartTax, cartSubTotal } = value;

        return (
          <div
            class="card border-primary  mb-3 mt-5"
            style={{ "font-family": "Anton" }}
          >
            <div class="card-header">Total Bill Amount</div>
            <div class="card-body">
              <h5 class="card-title">Order Amount: {cartSubTotal}$</h5>
              <h6 class="card-text" style={{ fontSize: "50px" }}>
                +
              </h6>
              <p class="card-text">Tax Amount: {cartTax}$</p>

              <h6 class="card-text" style={{ fontSize: "50px" }}>
                +
              </h6>
              <p class="card-text">Delivery Amlunt: 10$</p>

              <hr />
              <h5 class="card-title">Total Bill: {cartTotal + 10}$</h5>
            </div>
          </div>
        );
      }}
    </ShoppingConsumer>
  );
};

export default PaymentTotal;
