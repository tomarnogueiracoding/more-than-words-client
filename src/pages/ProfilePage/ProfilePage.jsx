import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:5005';

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
        <div className="min-h-screen bg-gradient-to-r from-amber-400 to-amber-300 grid h-screen place-items-start justify-center">
          <div className="my-10 card w-150 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={profile.profileImg} className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                Welcome {profile.firstname} {profile.lastname}
              </h2>
              <div className="my-5 card-actions">
                <Link to="/profile/edit">
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary">
                    Edit Your Information
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
