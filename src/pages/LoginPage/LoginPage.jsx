import { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

const API_URL = 'http://localhost:5005';

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate('/');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onClick={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <label htmlFor="password">Passord:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit">Login</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <Link to={'/signup'}>Sign Up</Link>
    </div>
  );
}

export default LoginPage;
