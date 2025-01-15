import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Obtenemos la URL actual
  const role = localStorage.getItem('userRole'); // Obtenemos el rol del usuario

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Elimina el token de localStorage
    localStorage.removeItem('userRole'); // Elimina el rol de localStorage
    setIsOpen(false); // Cierra el menú al hacer logout
    navigate('/login'); // Redirige al login
  };

  // Condición para no mostrar el navbar en la página de login
  if (location.pathname === '/login') {
    return null; // No renderiza el Navbar en la página de login
  }

  if(location.pathname === '/Registro'){
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
         
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><a href="/Inicio"><i className="fa fa-home"></i> Inicio</a></li>
          <li><a href="/Inicio"><i className="fa fa-home"></i> Inicio</a></li>
          <li><a href="/Inicio"><i className="fa fa-home"></i> Inicio</a></li>
          <li><a href="/Inicio"><i className="fa fa-home"></i> Inicio</a></li>
          <li><a href="/Inicio"><i className="fa fa-home"></i> Inicio</a></li>
          <li><a href="/Inicio"><i className="fa fa-home"></i> Inicio</a></li>

          {role === 'admin' && (
            <>
              <li><a href="/Gestion"><i className="fa fa-cogs"></i> Gestión</a></li>
              <li><a href="/GestionO"><i className="fa fa-usd"></i> Gastos</a></li>
              <li><a href="/HistorialPresupuesto"><i className="fa fa-history"></i> Historial</a></li>
            </>
          )}
          {role === 'subadmin' && (
            <>
              <li><a href="/Calendario"><i className="fa fa-calendar-check-o"></i>Calendario</a></li>
              <li><a href="/Gestion"><i className="fa fa-cogs"></i> Gestión</a></li>
            </>
          )}
          {role === 'sup' && (
            <li><a href="/obras">Obras</a></li>
          )}
          {role === 'jefesup' && (
            <li><a href="/obras">Obras</a></li>  
          )}
          
        </ul>
        <span className="logout-text" onClick={handleLogout}>
          Cerrar sesión
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
