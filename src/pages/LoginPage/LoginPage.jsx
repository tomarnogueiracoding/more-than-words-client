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
    <div className="bg-amber-400 h-screen p-10 flex justify-center">
      <div>
        <h1>Login</h1>
        <form
          className="p-5 bg-blue-300 w-96 my-5 rounded-tl-3xl rounded-br-3xl flex-col "
          onClick={handleSubmit}
        >
          <div className="p-5">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="p-5">
            <label htmlFor="password">Passord:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="p-5">
            <button
              className="px-3 my-3 mx-3 rounded-full bg-pink-300 hover:bg-pink-500 hover:text-white"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

        {errorMessage && <p>{errorMessage}</p>}

        <p>Don't have an account yet?</p>
        <Link to={'/signup'}>Sign Up</Link>
      </div>
    </div>
  );
}

export default LoginPage;
