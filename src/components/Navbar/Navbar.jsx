import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar bg-pink-500">
      {/* Logo */}
      <div className="navbar-start">
        <img
          className="w-32 sm:w-35 md:w-40 lg:w-48 xl:w-60"
          src="https://res.cloudinary.com/dvzekm9zq/image/upload/v1662036841/more-than-words/logo-more-than-words_jpbvft.png"
          alt=""
        />
      </div>
      {/* Menu Items */}
      <div className="navbar-end  space-x-6">
        {isLoggedIn && (
          <>
            <div className="shrink-0">
              <Link to="/quotes">
                <button className=" px-0.2 py-2 text-white  rounded-full hover:bg-pink-400 hover:text-white">
                  <img
                    className="w-7"
                    src="https://res.cloudinary.com/dvzekm9zq/image/upload/v1662036850/more-than-words/quote-icon_cvrrjn.png"
                  />
                </button>
              </Link>
            </div>
            <div className="shrink-0">
              <Link to="/favorites">
                <button className=" px-0.2 py-2 text-white  rounded-full hover:bg-pink-400 hover:text-white">
                  <img
                    className="w-7"
                    src="https://res.cloudinary.com/dvzekm9zq/image/upload/v1662036798/more-than-words/favorites-icon_jwmzf9.png"
                  />
                </button>
              </Link>
            </div>
            <div className="shrink-0">
              <Link to="/search">
                <button className="  px-0.2 py-2 text-white  rounded-full hover:bg-pink-400 hover:text-white">
                  <img
                    className="w-7"
                    src="https://res.cloudinary.com/dvzekm9zq/image/upload/v1662036854/more-than-words/search-icon_fyrbeh.png"
                  />
                </button>
              </Link>
            </div>

            <div className="shrink-0">
              <button
                className="  px-0.2 py-2 text-white  rounded-full hover:bg-pink-400 hover:text-white"
                onClick={logOutUser}
              >
                <img
                  className="w-7"
                  src="https://res.cloudinary.com/dvzekm9zq/image/upload/v1662036845/more-than-words/logout-icon_mykrzg.png"
                />
              </button>
            </div>
            <div className="shrink-0">
              <Link to="/profile">
                <div className=" text-white px-1 py-2">
                  <img
                    className="w-9 px-1 py-2 rounded-full"
                    src={user.profileImg}
                  />
                </div>
              </Link>
            </div>
          </>
        )}

        {!isLoggedIn && (
          <>
            <div className="shrink-0">
              <Link to="/">
                <button className="px-0.2 py-2 text-white rounded-full hover:bg-pink-400 hover:text-white">
                  <img
                    className="w-7"
                    src="https://res.cloudinary.com/dvzekm9zq/image/upload/v1662036834/more-than-words/home-icon_bvyvdt.png"
                  />
                </button>
              </Link>
            </div>
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
    </nav>
  );
}

export default Navbar;
