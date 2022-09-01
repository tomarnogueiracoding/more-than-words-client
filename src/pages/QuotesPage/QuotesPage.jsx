import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import addToFavoritesImg from '../../assets/img/add-to-favorites.png';
import { AuthContext } from '../../context/auth.context';

const API_URL = 'https://more-than-wordz.herokuapp.com';

function QuotesPage() {
  const [famousQuote, setFamousQuote] = useState([]);
  const [inspirationalQuote, setInspirationalQuote] = useState(null);
  const [wisdomQuote, setWisdomQuote] = useState(null);
  const [addToFavorites, setAddToFavorites] = useState(null);
  const [quote, setQuote] = useState(null);

  const { user } = useContext(AuthContext);

  const addToUserFavorites = (quote) => {
    const { content, author } = quote;
    const userId = user._id;
    const body = { content, author, userId };
    axios
      .post(`${API_URL}/api/quotes/addFavorite`, body)
      .then((response) => {
        console.log(response.data);
        setAddToFavorites(response.data);
      })
      .catch((error) => console.log(error));
  };

  const getFamousQuote = () => {
    axios
      .get(`${API_URL}/api/quotes/random?tags=famous-quotes`)
      .then((response) => {
        setFamousQuote(response.data);
        setInspirationalQuote(null);
        setWisdomQuote(null);
        setQuote(response.data);
      })
      .catch((error) => console.log(error));
  };

  const getInspirationalQuote = () => {
    axios
      .get(`${API_URL}/api/quotes/random?tags=inspirational`)
      .then((response) => {
        setInspirationalQuote(response.data);
        setFamousQuote(null);
        setWisdomQuote(null);
        setQuote(response.data);
      })
      .catch((error) => console.log(error));
  };

  const getWisdomQuote = () => {
    axios
      .get(`${API_URL}/api/quotes/random?tags=wisdom`)
      .then((response) => {
        setWisdomQuote(response.data);
        setFamousQuote(null);
        setInspirationalQuote(null);
        setQuote(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getFamousQuote();
  }, []);

  return (
    <div className="bg-amber-400 h-screen">
      {/* Quote Buttons */}
      <div className=" p-5">
        {/* Get famous quote button */}
        <button
          onClick={getFamousQuote}
          className="px-5 py-2 my-3 mx-3 text-white rounded-full bg-pink-500 hover:bg-pink-600 hover:text-white"
        >
          Famous Quote
        </button>

        {/* Get inspirational quote button */}
        <button
          onClick={getInspirationalQuote}
          className="px-5 py-2 my-3 mx-3 text-white rounded-full bg-pink-500 hover:bg-pink-600 hover:text-white"
        >
          Inspirational Quote
        </button>

        {/* Get wisdom quote button */}
        <button
          onClick={getWisdomQuote}
          className="px-5 py-2 my-3 mx-3 text-white rounded-full bg-pink-500 hover:bg-pink-600 hover:text-white"
        >
          Wisdom Quote
        </button>
      </div>

      {/* Famous Quotes */}
      <div>
        {quote && (
          <div className="p-5 bg-blue-300 mx-20 my-5 rounded-tl-3xl rounded-br-3xl flex-col">
            <h3 className="p-2 text-2xl">{quote.content}</h3>
            <h4 className="p-2 text-1xl">{quote.author}</h4>
            <button
              onClick={() => addToUserFavorites(quote)}
              className="px-3 my-3 mx-3 rounded-full bg-pink-300 hover:bg-pink-500 hover:text-white"
            >
              <img
                className="w-10"
                src="https://res.cloudinary.com/dvzekm9zq/image/upload/v1662037088/more-than-words/add-to-favorites_payutl.png"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuotesPage;
