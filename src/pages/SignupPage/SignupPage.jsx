import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://more-than-wordz.herokuapp.com';

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
    <div className="bg-amber-400 h-screen p-10 flex justify-center">
      <div>
        <h1>Sign Up</h1>
        <form
          className="p-5 bg-blue-300 w-96 my-5 rounded-tl-3xl rounded-br-3xl flex-col "
          onSubmit={handleSubmit}
        >
          {/* First Name input */}
          <div className="p-5">
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={handleFirstname}
            />
          </div>
          {/* Last Name input */}
          <div className="p-5">
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={handleLastname}
            />
          </div>
          {/* Email input */}
          <div className="p-5">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          {/* Password input */}
          <div className="p-5">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          {/* Submit button */}
          <div className="p-5">
            <button
              className="px-3 my-3 mx-3 rounded-full bg-pink-300 hover:bg-pink-500 hover:text-white"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>

        {errorMessage && <p>{errorMessage}</p>}
        <p>Already have an account?</p>
        <Link to={'/login'}>Login</Link>
      </div>
    </div>
  );
}

export default SignupPage;
