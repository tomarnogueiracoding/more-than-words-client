import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';

const API_URL = 'http://localhost:5005';

function FavoritesPage() {
  const [userFavorites, setUserFavorites] = useState([]);
  const [addToFavorites, setAddToFavorites] = useState(null);
  const [quote, setQuote] = useState(null);
  const { user } = useContext(AuthContext);

  const getUserFavorites = async () => {
    try {
      let response = await axios.get(
        `${API_URL}/api/quotes/all-favorites/${user._id}`
      );
      setUserFavorites(response.data.favorites);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromFavorites = (quote) => {
    const { content, author } = quote;
    const userId = user._id;
    const body = { content, author, userId };
    axios
      .delete(`${API_URL}/api/quotes/addFavorite`, body)
      .then((response) => {
        console.log(response.data);
        setAddToFavorites(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserFavorites();
  }, []);

  return (
    <div className="bg-amber-400 h-screen">
      <h3 className="text-2xl">Favorites Page</h3>
      {userFavorites &&
        userFavorites.map((quote) => {
          return (
            <div className="p-5 bg-blue-300 mx-20 my-5 rounded-tl-3xl rounded-br-3xl flex-col">
              <h3 className="p-2 text-2xl">{quote.content}</h3>
              <h4 className="p-2 text-1xl">{quote.author}</h4>
              <button
                onClick={() => removeFromFavorites(quote)}
                className="px-3 my-3 mx-3 rounded-full bg-pink-300 hover:bg-pink-500 hover:text-white"
              >
                Remove
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default FavoritesPage;
