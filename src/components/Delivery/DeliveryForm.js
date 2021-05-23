import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  FormWrap,
  FormContent,
  Form2,
  FormH1,
  FormButton2,
  FormInput2,
  FormLabel2,
} from "../common/FormElements";
import { setDeliverInfo } from "./../../services/PaymentService";
import { useAuth } from "./../../context/AuthContext";

const DeliveryForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const { currentUser } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await setDeliverInfo(
      currentUser.uid,
      addressLine1,
      addressLine2,
      city,
      state,
      province,
      zipCode,
      country
    );
    history.push("/products");
  };
  return (
    <>
      <FormWrap>
        <FormContent className="mt-5">
          <Form2 onSubmit={handleSubmit}>
            <FormH1>Deliver Address</FormH1>
            <div class="two-col">
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    First Name
                  </span>
                  <FormInput2
                    htmlFor="first name"
                    required
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormLabel2>
              </div>
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Last Name
                  </span>
                  <FormInput2
                    htmlFor="last name"
                    required
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormLabel2>
              </div>
            </div>
            <div class="two-col">
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Address Line 1
                  </span>
                  <FormInput2
                    htmlFor="address line 1"
                    required
                    type="text"
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                  />
                </FormLabel2>
              </div>
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Address Line 2
                  </span>
                  <FormInput2
                    htmlFor="address line 2"
                    required
                    type="text"
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                  />
                </FormLabel2>
              </div>
            </div>
            <div class="two-col">
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    State
                  </span>
                  <FormInput2
                    htmlFor="state"
                    required
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </FormLabel2>
              </div>
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Province
                  </span>
                  <FormInput2
                    htmlFor="province"
                    required
                    type="text"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                  />
                </FormLabel2>
              </div>
            </div>
            <div class="two-col">
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    City
                  </span>
                  <FormInput2
                    htmlFor="city"
                    required
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </FormLabel2>
              </div>
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Zip Code
                  </span>
                  <FormInput2
                    htmlFor="zip code"
                    required
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
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
              <div class="col1">
                <FormLabel2 htmlFor="for"></FormLabel2>
              </div>
            </div>
            <Link to="/payment">
              {" "}
              <FormButton2 type="submit">Continue</FormButton2>
            </Link>
          </Form2>
        </FormContent>
      </FormWrap>
    </>
  );
};

export default DeliveryForm;
