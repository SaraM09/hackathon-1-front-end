import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import CreateEventForm from "./components/CreateEventForm.jsx";
import DonationEventList from "./components/DonationEventList.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
        <Link to="/create-event-form">Create Event </Link>
        <Link to="/donation-event-list">Event List </Link>
        </nav>
        <Routes>
          <Route path="/create-event-form" element={<CreateEventForm />} />
          <Route path="/donation-event-list" element={<DonationEventList />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;
