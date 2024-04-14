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
// import CardExploration from "./components/CardExploration.jsx";
import SearchBar from './components/SearchBar.jsx';
import UserProfile from "./components/UserProfile.jsx";
import Home from "./components/Home.jsx";
import Header from "./components/header.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <AuthProvider>
    <Router>
      <div className="header-container">
        <Header>
        <SearchBar /> 
        </Header>
      </div>
        <nav>
        {/* <SearchBar /> */}
        <Link to='/' />
        <Link to="/create-event-form"></Link>
        <Link to="/donation-event-list"></Link>
        </nav>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-event-form" element={<CreateEventForm />} />
          <Route path="/donation-event-list" element={<DonationEventList />} />
          <Route path="/events/:eventId" element={<DonationEventDetails  />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUpForm />}/>
          <Route path="/profile" element={<UserProfile />}/>
        </Routes>
      <Footer />
    </Router>
    
    </AuthProvider>
     
  );
}

export default App;
