import React, { useState } from "react";
import {
  FormWrap,
  FormContent,
  Form2,
  FormH1,
  FormButton2,
  Text,
  FormInput2,
  FormLabel2,
  FormSelect2,
} from "../common/FormElements";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    console.log(email);
    console.log(password);
    console.log(userType);
    console.log(username);
    e.preventDefault();
  };
  return (
    <>
      <FormWrap>
        <FormContent className="mt-5">
          <Form2 onSubmit={handleSubmit}>
            <FormH1>Sign Up</FormH1>
            <div class="two-col">
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
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Username
                  </span>
                  <FormInput2
                    htmlFor="username"
                    required
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormLabel2>
              </div>
            </div>
            <div class="two-col">
              <div class="col1">
                <FormLabel2 htmlFor="for">User Type</FormLabel2>
                <FormSelect2
                  name="User Type"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value=""></option>
                  <option value="Buyer">Buyer</option>
                  <option value="Seller">Seller</option>
                </FormSelect2>
              </div>
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Password
                  </span>
                  <FormInput2
                    htmlFor="password"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormLabel2>
              </div>
            </div>
            <FormButton2 type="submit">Sign In</FormButton2>
            <Text>Already Have an Account? Sign In</Text>
          </Form2>
        </FormContent>
      </FormWrap>
    </>
  );
};

export default RegisterForm;
