import React from "react";
import DeliveryForm from "../components/Delivery/DeliveryForm";
import DeliveryOptionsForm from "../components/Delivery/DeliveryOptionsForm";

const DeliverScreen = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <DeliveryOptionsForm />
        </div>
        <div class="col">
          <DeliveryForm />
        </div>
      </div>
    </div>
  );
};

export default DeliverScreen;
