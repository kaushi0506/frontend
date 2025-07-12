import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/home";
import "./App.css";
import AddUser from "./components/User/user";
import UserDetails from "./components/UserDetails/Users";
import Nav from "./components/NavbarTemp/NavbarTemp";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/mainhome" />} />
        <Route path="/mainhome" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
         <Route path="/Users" element={<UserDetails />} />
 
      </Routes>
    </>
  );
}

export default App;
