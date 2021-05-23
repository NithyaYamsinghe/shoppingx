import React, { useState } from "react";
import {
  FormWrap,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
  Text,
} from "../common/FormElements";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <FormWrap>
        <FormContent className="mt-5">
          <Form onSubmit={handleSubmit}>
            <FormH1>Reset Password</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput
              htmlFor="email"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormButton type="submit" disabled={loading}>
              Reset Password
            </FormButton>
            <br />
            {error && <Text style={{ color: "red" }}>{error}</Text>}
            <Text>
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                Sign In
              </Link>
            </Text>
            <Text>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Sign Up
              </Link>
            </Text>
          </Form>
        </FormContent>
      </FormWrap>
    </>
  );
};

export default ForgotPasswordForm;
