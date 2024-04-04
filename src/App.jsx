import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";;
import Footer from "./components/Footer.jsx";
import CreateEventForm from "./components/CreateEventForm.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        
        <Link to="/create-event-form">Create Event </Link>
        <Routes>
          <Route path="/create-event-form" element={<CreateEventForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;
