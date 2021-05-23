import React, { useState, useEffect } from "react";
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
import { useAuth } from "./../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { login, currentUser } = useAuth();
  const { success, setSuccess } = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);

      await login(email, password);

      history.push("/products");
    } catch {
      setError("Failed to log in");
    }
    // var token = await currentUser.getIdToken();
    // localStorage.setItem("token", token);

    setLoading(false);
  };

  return (
    <>
      <FormWrap>
        <FormContent className="mt-5">
          <Form onSubmit={handleSubmit}>
            {success && <Alert variant="success">Logged In Successfully</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <FormH1>Sign In</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput
              htmlFor="email"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput
              htmlFor="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormButton type="submit" disabled={loading}>
              Sign In
            </FormButton>
            <Text>
              <Link
                to="/resetPassword"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Forgot Password?
              </Link>
            </Text>
            <Text>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Create an Account
              </Link>
            </Text>
          </Form>
        </FormContent>
      </FormWrap>
    </>
  );
};

export default LoginForm;
