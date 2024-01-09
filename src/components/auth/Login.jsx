import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import InputField from '../common/InputField';
import Button from '../common/Button';
import authService from '../services/authService';
import '../common/Form.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await authService.login(email, password);
      console.log('Logged in:', user);
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="form-container"> {/* Apply form styling */}
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="auth-form"> {/* Apply form styling */}
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
