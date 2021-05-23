import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
import { Alert } from "react-bootstrap";

import { useAuth } from "./../../context/AuthContext";
import { createUser } from "./../../services/UserService";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      const data = await signup(email, password);
      await createUser(lastName, firstName, data.user.uid, userType);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  };

  return (
    <>
      <FormWrap>
        <FormContent className="mt-5">
          <Form2 onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            <FormH1>Sign Up</FormH1>
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
                <FormLabel2 htmlFor="for">User Type</FormLabel2>
                <FormSelect2
                  name="User Type"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value=""></option>
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </FormSelect2>
              </div>
            </div>
            <div class="two-col">
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
              <div class="col1">
                <FormLabel2 htmlFor="for">
                  <span style={{ display: "block", margin: "0 0 3px" }}>
                    Confirm Password
                  </span>
                  <FormInput2
                    htmlFor="confirm password"
                    required
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </FormLabel2>
              </div>
            </div>
            <FormButton2 type="submit" disabled={loading}>
              Sign In
            </FormButton2>
            <Text>
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                Already Have an Account? Sign In
              </Link>
            </Text>
          </Form2>
        </FormContent>
      </FormWrap>
    </>
  );
};

export default RegisterForm;
