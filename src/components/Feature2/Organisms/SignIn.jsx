import React, { useState } from "react";
import { useAuth } from "../../../Contexts/AuthContext/AuthContext.jsx";

const loginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, loginWithGoogle } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error("Error signing in with email and password", error);
    }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label>Username/Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default loginForm;