import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import logo from '../../assets/img/logo-more-than-words.png';

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="relative container mx-auto p-4 bg-pink-400">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img
            className="w-32 sm:w-35 md:w-40 lg:w-48 xl:w-60"
            src={logo}
            alt=""
          />
        </div>
        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <Link to="/">
            <button className="px-3 rounded-full hover:bg-pink-300">
              Home
            </button>
          </Link>

          {isLoggedIn && (
            <>
              <Link to="/quotes">
                <button className="px-3 rounded-full hover:bg-pink-300">
                  Random Quote
                </button>
              </Link>
              <button
                className="px-3 rounded-full hover:bg-pink-300"
                onClick={logOutUser}
              >
                Logout
              </button>
              <span className="px-3">
                {user && user.firstname + ' ' + user.lastname}
              </span>
            </>
          )}

          {!isLoggedIn && (
            <>
              <Link to="/signup">
                <button className="px-3 rounded-full hover:bg-pink-300">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="px-3 rounded-full hover:bg-pink-300">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
