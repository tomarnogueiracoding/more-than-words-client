import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5005';

function SignupPage(props) {
  // States for input fields
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  // Handler functions for input values
  const handleFirstname = (e) => setFirstname(e.target.value);
  const handleLastname = (e) => setLastname(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { firstname, lastname, email, password };

    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate('/login');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-amber-400 to-amber-300">
      <div>
        <h1 className="text-2xl font-bold">Create an Account</h1>
        <form
          className="p-5 bg-blue-300  my-5 rounded-tl-3xl rounded-br-3xl "
          onSubmit={handleSubmit}
        >
          {/* First Name input */}
          <div className="form-control my-3">
            <label className="input-group input-group-sm" htmlFor="firstname">
              <span>First Name</span>

              <input
                className="input input-bordered input-sm"
                type="text"
                name="firstname"
                value={firstname}
                placeholder="your first name"
                onChange={handleFirstname}
              />
            </label>
          </div>
          {/* Last Name input */}
          <div className="form-control my-3">
            <label className="input-group input-group-sm" htmlFor="lastname">
              <span>Last Name</span>
              <input
                className="input input-bordered input-sm "
                type="text"
                name="lastname"
                value={lastname}
                placeholder="your last name"
                onChange={handleLastname}
              />
            </label>
          </div>
          {/* Email input */}
          <div className="form-control my-3">
            <label className="input-group input-group-sm" htmlFor="email">
              <span>Email </span>
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
          {/* Password input */}
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
          {/* Submit button */}
          <div className="p-5">
            <button
              className="px-8 py-1 my-3 mx-3 rounded-full bg-pink-300 hover:bg-pink-500 hover:text-white"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>

        {errorMessage && <p>{errorMessage}</p>}
        <p>Already have an account?</p>

        <Link className="text-1xl font-bold text-pink-500" to={'/login'}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignupPage;
