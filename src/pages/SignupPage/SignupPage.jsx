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
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {/* First Name input */}
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={handleFirstname}
        />
        {/* Last Name input */}
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={handleLastname}
        />
        {/* Email input */}
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        {/* Password input */}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        {/* Submit button */}
        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}
      <p>Already have an account?</p>
      <Link to={'/login'}>Login</Link>
    </div>
  );
}

export default SignupPage;
