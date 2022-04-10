import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Home from './components/Home';
import Nav from './components/Header/Nav';
import Header from './components/Header/Header';
import SignUpFooter from './components/Footer/SignUpFooter';
import Footer from './components/Footer';
import Shop from './components/Shop';


const RouteSwitch = () => {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <SignUpFooter />
      <Footer />
    </Router>
  )
}

export default RouteSwitch