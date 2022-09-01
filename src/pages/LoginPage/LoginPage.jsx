import { useState, useContext, useEffect } from 'react';
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
        navigate('/quotes');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-amber-400 to-amber-300">
      <div>
        <h1 className="text-2xl font-bold">Login into your account</h1>
        <form
          className="p-5 bg-blue-300 my-5 rounded-tl-3xl rounded-br-3xl "
          onClick={handleSubmit}
        >
          <div className="form-control my-3">
            <label className="input-group input-group-sm" htmlFor="email">
              <span>Email</span>
              <input
                className="input input-bordered input-sm w-52"
                type="email"
                name="email"
                value={email}
                placeholder="info@example.com"
                onChange={handleEmail}
              />
            </label>
          </div>
          <div className="form-control my-3">
            <label className="input-group input-group-sm" htmlFor="password">
              <span>Password</span>
              <input
                className="input input-bordered input-sm "
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
              />
            </label>
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
        <Link className="text-1xl font-bold text-pink-500" to={'/signup'}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
