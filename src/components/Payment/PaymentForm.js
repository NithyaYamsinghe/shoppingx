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
import { useAuth } from "./../../context/AuthContext";
import { cardPayment } from "./../../services/PaymentService";
import { Alert } from "react-bootstrap";

const PaymentForm = ({ items }) => {
  const [name, setName] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [cvv, setCvv] = useState("");
  const [country, setCountry] = useState("");
  const [expYear, setExpYear] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [email, setEmail] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const { currentUser } = useAuth();
  const [receipt, setReceipt] = useState("");
  const [receiptSucess, setReceiptSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cart = {
      userId: currentUser.uid,
      items: items,
    };

    const { data } = await cardPayment(
      name,
      cardNo,
      cvv,
      expMonth,
      expYear,
      country,
      email,
      cart
    );

    setReceipt(data.cart.receipt);
    setReceiptSuccess(true);
  };
  return (
    <>
      <FormWrap>
        <FormContent className="mt-5">
          {receiptSucess && (
            <Alert variant="success">
              Payment Successful!
              <a
                href={receipt}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Please Click the link to view receipt
              </a>
            </Alert>
          )}
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
                      Exp Month
                    </span>
                    <FormInput2
                      htmlFor="exp month"
                      required
                      type="number"
                      value={expMonth}
                      onChange={(e) => setExpMonth(e.target.value)}
                    />
                  </FormLabel2>
                </div>
                <div class="col1">
                  <FormLabel2 htmlFor="for">
                    <span style={{ display: "block", margin: "0 0 3px" }}>
                      Exp Year
                    </span>
                    <FormInput2
                      htmlFor="exp year"
                      required
                      type="number"
                      value={expYear}
                      onChange={(e) => setExpYear(e.target.value)}
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
                      Email
                    </span>
                    <FormInput2
                      htmlFor="email"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormLabel2>
                </div>
              </div>
              <div class="two-col">
                <div class="col1">
                  <FormLabel2 htmlFor="for">
                    <span style={{ display: "block", margin: "0 0 3px" }}>
                      Country
                    </span>
                    <FormInput2
                      htmlFor="country"
                      required
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </FormLabel2>
                </div>
                <div class="col1"></div>
              </div>
              <FormButton2 type="submit">Place Order</FormButton2>
            </Form2>
          )}
          {paymentType == "Mobile" && <MobilePaymentForm items={items} />}
        </FormContent>
      </FormWrap>
    </>
  );
};

export default PaymentForm;
