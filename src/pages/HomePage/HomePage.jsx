import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

function HomePage() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-amber-400 to-amber-300">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-7xl font-bold">Listen to Your Inner Voice</h1>
          <p className="py-10 text-2xl font-bold">
            "Where words fail, music speaks"
          </p>

          <Link to="/signup">
            <button className="btn btn-secondary">Create Account</button>
          </Link>

          <p className="m-4 text-1xl ">Already have an account?</p>
          <Link to="/login">
            <p className=" text-1xl font-bold text-pink-500">Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
