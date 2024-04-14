import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthContext/AuthContext.jsx";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

const loginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login, loginWithGoogle } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.error("Error signing in with email and password", error);
    }
    };

    return (
        <Card className="border-5" style={{ borderColor: '#DCE1DE' }}>
    <Card.Body>
        <Form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Col>
          </Form.Group>
    
          <Form.Group as={Row} className="mb-1" controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Col>
          </Form.Group>
    
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 1 }}>
              <Button style={{ backgroundColor: '#49A078', borderColor: '#DCE1DE'}} type="submit"  >Login</Button>
            </Col>
            <Link to="/signup">
                <strong style={{ color: '#216869'}}>Don't have an account?</strong>
              </Link>
          </Form.Group>
        </Form>
        </Card.Body>
        </Card>
      );
    };

export default loginForm;