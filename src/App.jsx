import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import CreateEventForm from "./components/CreateEventForm.jsx";
import DonationEventList from "./components/DonationEventList.jsx";
import DonationEventDetails from "./components/DonationEventDetails.jsx";
import "./App.css";
import SignUpForm from '../src/components/Feature2/Organisms/SignUp.jsx';
import SignIn from './components/Feature2/Organisms/SignIn.jsx';
import { AuthProvider } from './Contexts/AuthContext/AuthContext';
import CardExploration from "./components/CardExploration.jsx";



function App() {

  return (
    <AuthProvider>
    <Router>
      <div>
        <nav>
        <Link to="/create-event-form">Create Event </Link>
        <Link to="/donation-event-list">Event List </Link>
        </nav>
      
        <Routes>
          <Route path="/create-event-form" element={<CreateEventForm />} />
          <Route path="/donation-event-list" element={<DonationEventList />} />
          <Route path="/events/:eventId" element={<DonationEventDetails  />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUpForm />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
    
    </AuthProvider>
     
  );
}

export default App;
