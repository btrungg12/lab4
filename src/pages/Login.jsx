import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const usernameRef = useRef(null); // [cite: 204]

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    login(); // Set isAuthenticated = true
    navigate('/dashboard'); // Redirect sang Dashboard 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome to BlogDash</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input 
            ref={usernameRef} 
            type="text" 
            placeholder="Enter username..." 
          />
        </div>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;