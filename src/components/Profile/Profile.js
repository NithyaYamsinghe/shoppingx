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
import { useAuth } from "./../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";

const Profile = () => {
  const [password, setPassword] = useState("*********");
  const [confirmPassword, setConfirmPassword] = useState("***********");
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [email, setEmail] = useState(currentUser.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (email !== currentUser.email) {
      promises.push(updateEmail(email));
    }
    if (password) {
      promises.push(updatePassword(password));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <FormWrap>
        <FormContent className="mt-5">
          <Form onSubmit={handleSubmit}>
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
            <FormLabel htmlFor="for">Confirm Password</FormLabel>
            <FormInput
              htmlFor="confirm password"
              required
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FormButton type="submit" disabled={loading}>
              Update Profile
            </FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </>
  );
};

export default Profile;
