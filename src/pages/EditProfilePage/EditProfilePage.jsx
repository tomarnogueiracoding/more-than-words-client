import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';

const API_URL = 'http://localhost:5005';

function EditProfilePage() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);
  const { logOutUser } = useContext(AuthContext);

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

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append('profileImg', e.target.files[0]);

    axios
      .post(`${API_URL}/api/upload`, uploadData)
      .then((response) => {
        console.log(response.data.fileUrl);
        setProfileImg(response.data.fileUrl);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log('Error while uploading the file: ', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { firstname, lastname, profileImg };

    axios
      .put(`${API_URL}/api/users/${user._id}`, body)
      .then(() => {
        setFirstname('');
        setLastname('');
        setProfileImg('');
        navigate('/profile');
      })
      .catch((error) => console.log(error));
  };

  /*   if (!firstname || !lastname || !profileImg) return null; */

  const deleteProfile = async () => {
    try {
      let response = await axios.delete(`${API_URL}/api/users/${user._id}`);
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
        <div>
          <label htmlFor="upload-file">Upload Profile Picture</label>
          <input
            type="file"
            name="upload-file"
            accept=".jpeg, .jpg, .png, .bmp, .webp"
            onChange={(e) => handleFileUpload(e)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <button onClick={deleteProfile}>Delete profile</button>
    </div>
  );
}

export default EditProfilePage;
