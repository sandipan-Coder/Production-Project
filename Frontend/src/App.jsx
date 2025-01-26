import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import AddCard from "./Component/AddCard/AddCard";
import Auth from "./Component/Authatication/Auth";
import AboutMe from "./Component/Aboutme/Aboutme";
import Contact from "./Component/Contact/Contact";


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/cards/create" element={ <AddCard/> }/>
      <Route path="/cards/auth" element={ <Auth/> }/>
      <Route path="/cards/me" element={ <AboutMe/> }/>
      <Route path="/cards/contact" element={ <Contact/> }/>
    </Routes>
  );
}

export default App;