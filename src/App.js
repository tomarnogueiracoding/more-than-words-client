import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';
import QuotesPage from './pages/QuotesPage/QuotesPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import SearchPage from './pages/SearchPage/SearchPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import EditProfilePage from './pages/EditProfilePage/EditProfilePage';
import SpotifyPlayer from './pages/SpotifyPlayer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/quotes"
          element={
            <IsPrivate>
              <QuotesPage />
            </IsPrivate>
          }
        />

        <Route
          path="/favorites"
          element={
            <IsPrivate>
              <FavoritesPage />
            </IsPrivate>
          }
        />
        <Route
          path="/search"
          element={
            <IsPrivate>
              <SearchPage />
            </IsPrivate>
          }
        />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <IsPrivate>
              <EditProfilePage />
            </IsPrivate>
          }
        />
        <Route
          path="/spotify"
          element={
            <IsPrivate>
              <SpotifyPlayer />
            </IsPrivate>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
