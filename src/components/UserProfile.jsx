import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";


export default function UserProfile() {
    const auth = getAuth();
    const user = auth.currentUser;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [user_id, setUser_id] = useState("");
    const [full_name, setFull_name] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [location, setLocation] = useState("");


    return (
        <div>
            <h1>User Profile</h1>

            <h2>Email: {email}</h2>
            <h2>User ID: {user_id}</h2>
            <h2>Username: {username}</h2>
            <h2>Full Name: {full_name}</h2>
            <h2>Phone Number: {phone_number}</h2>
            <h2>Location: {location}</h2>
        </div>
    );
}