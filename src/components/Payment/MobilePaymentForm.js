import React, { useState } from "react";
import {
  FormWrap,
  FormContent,
  Form2,
  FormH1,
  FormButton2,
  FormInput2,
  FormLabel2,
} from "../common/FormElements";
import { mobilePayment, mobileAssign } from "./../../services/PaymentService";
import { useAuth } from "./../../context/AuthContext";
import { Alert } from "react-bootstrap";

const MobilePaymentForm = ({ items }) => {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const { currentUser } = useAuth();
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await mobileAssign(mobileNo, currentUser.uid);
      await mobilePayment(currentUser.uid, items);
      setSuccess(true);
    } catch {
      setSuccess(false);
    }
  };
  return (
    <>
      <FormWrap>
        <FormContent className="mt-5">
          {success && <Alert variant="success">Payment Successful!</Alert>}

          <Form2 onSubmit={handleSubmit}>
            <FormH1>Mobile Details</FormH1>
            <div class="two-col">
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Name
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
                    Mobile Number
                  </span>
                  <FormInput2
                    htmlFor="card number"
                    required
                    type="number"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                  />
                </FormLabel2>
              </div>
            </div>
            <FormButton2 type="submit">Place Order</FormButton2>
          </Form2>
        </FormContent>
      </FormWrap>
    </>
  );
};

export default MobilePaymentForm;
