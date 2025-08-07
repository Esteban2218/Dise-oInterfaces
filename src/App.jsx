import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import About from './pages/About';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Contacto from './pages/Contacto';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contacto />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;