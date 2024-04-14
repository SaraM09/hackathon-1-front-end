import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthContext/AuthContext.jsx";
import { Form, Button, Row, Col } from "react-bootstrap";

const isPasswordValid = (password) => {
  // regex patterns for password requirements
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

  // check if password meets all requirements
  return (
    uppercaseRegex.test(password) &&
    numberRegex.test(password) &&
    specialCharRegex.test(password)
  );
};

const signUpForm = ({ onSubmit }) => {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user_id, setUser_id] = useState("");
  const [full_name, setFull_name] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!isPasswordValid(password)) {
      alert(
        'Password requires at least one uppercase letter, one number, and one special character.'
      );
      return;
    }

    try {
      await signup(email, password);
      navigate("/");
    } catch (error) {
      console.error("Error signing up with email and password", error);
    }
  };

  return (
    <Form onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalUsername">
        <Form.Label column sm={2}>
          Username
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalFullName">
        <Form.Label column sm={2}>
          Full Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Full Name"
            value={full_name}
            onChange={(e) => setFull_name(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPhoneNumber">
        <Form.Label column sm={2}>
          Phone Number
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Phone Number"
            value={phone_number}
            onChange={(e) => setPhone_number(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalLocation">
        <Form.Label column sm={2}>
          Location
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 1 }}>
          <Button style={{ backgroundColor: '#49A078', borderColor: '#DCE1DE'}} type="submit">Sign Up</Button>
        </Col>
        <Link to="/signin">
            <strong style={{ color: '#216869'}}>Already have an account?</strong>
        </Link>
      </Form.Group>
    </Form>
  );
};

export default signUpForm;