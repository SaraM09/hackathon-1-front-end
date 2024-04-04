import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthContext/AuthContext.jsx";

const signUpForm = ({ onSubmit }) => {
    const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
    //   return navigate("/");
    } catch (error) {
      console.error("Error signing up with email and password", error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );

};

export default signUpForm;