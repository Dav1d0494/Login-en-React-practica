import React, { useState } from 'react';
import './App.css';
import logoApplus from "./assets/logo.png"; 

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí conectas tu lógica de autenticación (API, Firebase, etc.)
    console.log('Iniciar sesión con:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logoApplus} alt="Applus Logo" className="login-logo" />
        
        <h2 className="login-title ambiensq-subtitle">
          <span className="letter-A">A</span>
          <span className="letter-m">m</span>
          <span className="letter-b">b</span>
          <span className="letter-i">i</span>
          <span className="letter-e">e</span>
          <span className="letter-n">n</span>
          <span className="letter-s">s</span>
          <span className="letter-Q">Q</span>
        </h2>
        
        <p className="subtitle">Tu plataforma de monitoreo ambiental inteligente.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Iniciar sesión</h3>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Correo electronico<span className="required-asterisk"></span>
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Contraseña<span className="required-asterisk"></span>
            </label>
            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="form-input"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.94 10.94 0 0112 20c-7 0-11-8-11-8a19.66 19.66 0 015.06-6.06M9.9 4.24A10.94 10.94 0 0112 4c7 0 11 8 11 8a19.66 19.66 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <a href="#" className="forgot-password-link">¿Olvidaste tu contraseña?</a>

          <button type="submit" className="btn-submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;