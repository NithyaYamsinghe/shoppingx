import React from "react";

const PaymentTotal = () => {
  return (
    <div
      class="card border-primary  mb-3 mt-5"
      style={{ "font-family": "Anton" }}
    >
      <div class="card-header">Total Bill Amount</div>
      <div class="card-body">
        <h5 class="card-title">Order Amount: 500$</h5>
        <h6 class="card-text" style={{ fontSize: "50px" }}>
          +
        </h6>
        <p class="card-text">Delivery Amlunt: 10$</p>

        <hr />
        <h5 class="card-title">Total Bill: 510$</h5>
      </div>
    </div>
  );
};

export default PaymentTotal;
