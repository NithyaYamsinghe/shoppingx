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

const MobilePaymentForm = () => {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <FormWrap>
        <FormContent className="mt-5">
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
