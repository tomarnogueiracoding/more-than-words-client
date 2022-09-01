import { Link } from 'react-router-dom';
import React, { useEffect, useContext, useNavigate } from 'react';
import { AuthContext } from '../../context/auth.context';

function HomePage() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div class="hero min-h-screen bg-gradient-to-r from-amber-400 to-amber-300">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-7xl font-bold">Listen to Your Inner Voice</h1>
          <p class="py-10 text-2xl font-bold">
            "Where words fail, music speaks"
          </p>

          <Link to="/signup">
            <button class="btn btn-secondary">Create Account</button>
          </Link>

          <p class="m-4 text-1xl ">Already have an account?</p>
          <Link to="/login">
            <p class=" text-1xl font-bold text-pink-500">Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
