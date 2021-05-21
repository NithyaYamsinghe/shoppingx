import React, { useState } from "react";
import {
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormInput,
  FormLabel,
} from "../common/FormElements";

const DeliveryOptionsForm = () => {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <FormWrap>
        <FormContent className="mt-5">
          <Form onSubmit={handleSubmit}>
            <FormH1>Deliver Options</FormH1>
            <FormLabel htmlFor="for">
              Standard Delivery (Delivery between 3-5 working days )
            </FormLabel>
            <FormInput name="option 1" type="radio" value={option1} />
            <FormLabel htmlFor="for">Domex Courier (4 to 7 days)</FormLabel>
            <FormInput name="option2" type="radio" value={option2} />
          </Form>
        </FormContent>
      </FormWrap>
    </>
  );
};

export default DeliveryOptionsForm;
