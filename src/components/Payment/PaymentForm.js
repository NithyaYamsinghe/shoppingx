import React, { useState } from "react";
import {
  FormWrap,
  FormContent,
  Form2,
  FormH1,
  FormButton2,
  FormInput2,
  FormLabel2,
  FormSelect,
  FormLabel,
} from "../common/FormElements";
import MobilePaymentForm from "./MobilePaymentForm";

const PaymentForm = () => {
  const [name, setName] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [cvv, setCvv] = useState("");
  const [date, setDate] = useState("");
  const [paymentType, setPaymentType] = useState("");

  const handleSubmit = (e) => {
    console.log(name);
    console.log(cardNo);
    console.log(cvv);
    console.log(date);
    e.preventDefault();
  };
  return (
    <>
      <FormWrap>
        <FormContent className="mt-5">
          <Form2 className="mb-2">
            <FormLabel htmlFor="for">Select Payment Method</FormLabel>
            <FormSelect
              name="Payment Type"
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
            >
              <option value=""></option>
              <option value="Card">Card Payment</option>
              <option value="Mobile">Mobile Payment</option>
            </FormSelect>
          </Form2>
          {paymentType == "Card" && (
            <Form2 onSubmit={handleSubmit}>
              <FormH1>Card Details</FormH1>
              <div class="two-col">
                <div class="col1">
                  <FormLabel2 htmlFor="for">
                    <span style={{ display: "block", margin: "0 0 3px" }}>
                      Name on Card
                    </span>
                    <FormInput2
                      htmlFor="name"
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormLabel2>
                </div>
                <div class="col1">
                  <FormLabel2 htmlFor="for">
                    <span style={{ display: "block", margin: "0 0 3px" }}>
                      Card Number
                    </span>
                    <FormInput2
                      htmlFor="card number"
                      required
                      type="number"
                      value={cardNo}
                      onChange={(e) => setCardNo(e.target.value)}
                    />
                  </FormLabel2>
                </div>
              </div>
              <div class="two-col">
                <div class="col1">
                  <FormLabel2 htmlFor="for">
                    <span style={{ display: "block", margin: "0 0 3px" }}>
                      CVV
                    </span>
                    <FormInput2
                      htmlFor="cvv"
                      required
                      type="number"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                    />
                  </FormLabel2>
                </div>
                <div class="col1">
                  <FormLabel2 htmlFor="for">
                    <span style={{ display: "block", margin: "0 0 3px" }}>
                      Card Expire Date
                    </span>
                    <FormInput2
                      htmlFor="expire date"
                      required
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </FormLabel2>
                </div>
              </div>
              <FormButton2 type="submit">Place Order</FormButton2>
            </Form2>
          )}
          {paymentType == "Mobile" && <MobilePaymentForm />}
        </FormContent>
      </FormWrap>
    </>
  );
};

export default PaymentForm;
