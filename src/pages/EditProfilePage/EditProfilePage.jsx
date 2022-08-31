import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';

const API_URL = 'http://localhost:5005';

function EditProfilePage() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [profileImg, setProfileImg] = useState('');

  const { user } = useContext(AuthContext);
  /*  const { logOutUser } = useContext(AuthContext); */

  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      let response = await axios.get(`${API_URL}/api/users/${user._id}`);
      setFirstname(response.data.firstname);
      setLastname(response.data.lastname);
      setProfileImg(response.data.profileImg);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleFirstname = (e) => setFirstname(e.target.value);
  const handleLastname = (e) => setLastname(e.target.value);
  const handleProfileImg = (e) => setProfileImg(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const body = { firstname, lastname, profileImg };

  axios
    .put(`${API_URL}/api/users/${user}`, body)
    .then(() => {
      setFirstname('');
      setLastname('');
      setProfileImg('');
      navigate('/profile');
    })
    .catch((error) => console.log(error));

  const deleteProfile = async () => {
    try {
      let response = await axios.delete(`${API_URL}/api/users/${user}`);
      logOutUser();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First name: </label>
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={handleFirstname}
        />
        <label htmlFor="lastname">Last name: </label>
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={handleLastname}
        />
        <label htmlFor="profileImg">Profile Picture: </label>
        <input type="file" name="profileImg" onChange={handleProfileImg} />
      </form>

      <button onClick={deleteProfile}>Delete profile</button>
    </div>
  );
}

export default EditProfilePage;
