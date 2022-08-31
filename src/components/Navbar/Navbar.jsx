import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import logo from '../../assets/img/logo-more-than-words.png';
import homeIcon from '../../assets/img/home-icon.png';
import favoritesIcon from '../../assets/img/favorites-icon.png';
import logoutIcon from '../../assets/img/logout-icon.png';
import searchIcon from '../../assets/img/search-icon.png';
import quoteIcon from '../../assets/img/quote-icon.png';
import profileImg from '../../assets/img/profilePic.jpeg';

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar z-10 bg-pink-500">
      <div className="flex-1">
        {/* Logo */}
        <div className="pt-2">
          <img
            className="w-32 sm:w-35 md:w-40 lg:w-48 xl:w-60"
            src={logo}
            alt=""
          />
        </div>
        {/* Menu Items */}
        <div className=" flex space-x-6">
          <div>
            <Link to="/">
              <button className="px-1 py-2 text-white rounded-full hover:bg-pink-400 hover:text-white">
                <img className="w-8" src={homeIcon} />
              </button>
            </Link>
          </div>

          {isLoggedIn && (
            <>
              <div>
                <Link to="/quotes">
                  <button className="px-1 py-2 text-white  rounded-full hover:bg-pink-400 hover:text-white">
                    <img className="w-8" src={quoteIcon} />
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/favorites">
                  <button className="px-1 py-2 text-white  rounded-full hover:bg-pink-400 hover:text-white">
                    <img className="w-8" src={favoritesIcon} />
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/search">
                  <button className="px-1 py-2 text-white  rounded-full hover:bg-pink-400 hover:text-white">
                    <img className="w-8" src={searchIcon} />
                  </button>
                </Link>
              </div>

              <div>
                <button
                  className="px-1 py-2 text-white  rounded-full hover:bg-pink-400 hover:text-white"
                  onClick={logOutUser}
                >
                  <img className="w-8" src={logoutIcon} />
                </button>
              </div>
              <div>
                <div className=" text-white px-3 py-2">
                  {/* <p>{user && user.firstname + ' ' + user.lastname}</p> */}
                  <img className="w-8 rounded-full" src={profileImg} />
                </div>
              </div>
            </>
          )}

          {!isLoggedIn && (
            <>
              <Link to="/signup">
                <button className="px-1 py-2 text-white  rounded-full hover:bg-pink-400 hover:text-white">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="px-1 py-2 text-white  rounded-full hover:bg-pink-400 hover:text-white">
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
