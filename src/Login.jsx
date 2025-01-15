import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Inicio de sesión"; // Cambia el título de la página
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setShowWarning(true);
      setLoginError('');
    } else {
      setShowWarning(false);
      setLoginError('');

      try {
        const response = await fetch('https://assis.dumelectricacons.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombreUsuario: username,
            contrasena: password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Inicio de sesión exitoso:', data);

          // Guarda el token, el id del usuario y el rol en localStorage
          localStorage.setItem('authToken', data.token);
          localStorage.setItem('usuarioId', data.id); // Guardamos el id del usuario
          localStorage.setItem('userRole', data.rol);

          // Llamamos a onLogin para actualizar el estado de autenticación en App.jsx
          onLogin();  

          // Redirige a la página de inicio
          navigate('/Inicio');  
        } else {
          setLoginError('Tu nombre de usuario o contraseña son incorrectos');
          setShowWarning(false);
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        setLoginError('Hubo un problema con el servidor, por favor intenta más tarde');
      }
    }
  };

  const handleLogin = async (e) => {
    navigate('/InicioAd'); 
  };

  const handleRegister = async (e) => {
    navigate('/Registro');
  };


  return (
    <div className="login-background"> {/* Contenedor con fondo específico */}
    
      <div className="login-container">
        <div className='logo'></div>
        <div className="background-shapes">
        <button className='button' onClick={handleRegister}>Registrarse</button>
        </div>    
        <div className="background-shapes">  
        </div>
        <form onSubmit={handleSubmit}>
          
          <input
            type="text"
            placeholder="Teléfono"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
          <input
            type="password"
            placeholder="Contraseña"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />  

          <button style={{backgroundColor: '#A6E1FE', borderRadius: 20, padding: 10}} onClick={handleLogin} >Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};


export default Login;
