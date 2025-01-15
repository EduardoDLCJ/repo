import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Registro from './Registro';
import InicioAd from './InicioAd';
import Navbar from './Navbar';
import './Login.css';
import './Registro.css';
import './Inicio.css';
import './Navbar.css';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Registro" element={<Registro />} />
      <Route path="/InicioAd" element={<InicioAd />} />
    </Routes>
  </Router>
);

export default App;
