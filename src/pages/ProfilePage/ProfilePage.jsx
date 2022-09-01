import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';
import { Link } from 'react-router-dom';

const API_URL = 'https://more-than-wordz.herokuapp.com';

function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const { user } = useContext(AuthContext);

  const getProfile = async () => {
    try {
      let response = await axios.get(`${API_URL}/api/users/${user._id}`);
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      {profile && (
        <div>
          <img src={profile.profileImg} />
          <p>{profile.firstname}</p>
          <p>{profile.lastname}</p>
          <div className="p-5">
            <button
              className="px-3 my-3 mx-3 rounded-full bg-pink-300 hover:bg-pink-500 hover:text-white"
              type="submit"
            >
              <Link to="/profile/edit">Edit Profile</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
