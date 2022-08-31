import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';

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
        <div>
          <img src={profile.profileImg} />
          <p>{profile.firstname}</p>
          <p>{profile.lastname}</p>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
