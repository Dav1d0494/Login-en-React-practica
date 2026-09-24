import { useState } from 'react';
import './Login.css';
import logo from './assets/logo.png'; // Si tu imagen tiene otro nombre o extensión (.jpg, .svg), cámbialo aquí

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inicio de sesión con:', { email, password });
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="brand-header">
          <img src={logo} alt="Logo App" className="login-logo-img" />
          <p className="subtitle">Tu plataforma de monitoreo ambiental inteligente.</p>
        </div>

        <h3>Iniciar sesión</h3>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Correo electrónico*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group password-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          <a href="#forgot" className="forgot-link">
            ¿Olvidaste tu contraseña?
          </a>

          <button type="submit" className="btn-submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}