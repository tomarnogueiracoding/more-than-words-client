import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import addToFavoritesImg from '../../assets/img/add-to-favorites.png';

const API_URL = 'http://localhost:5005';

function QuotesPage() {
  const [famousQuote, setFamousQuote] = useState([]);
  const [inspirationalQuote, setInspirationalQuote] = useState([]);
  const [wisdomQuote, setWisdomQuote] = useState([]);

  const getFamousQuote = () => {
    axios
      .get(`${API_URL}/api/quotes/random?tags=famous-quotes`)
      .then((response) => setFamousQuote(response.data))
      .catch((error) => console.log(error));
  };

  const getInspirationalQuote = () => {
    axios
      .get(`${API_URL}/api/quotes/random?tags=inspirational`)
      .then((response) => setInspirationalQuote(response.data))
      .catch((error) => console.log(error));
  };

  const getWisdomQuote = () => {
    axios
      .get(`${API_URL}/api/quotes/random?tags=wisdom`)
      .then((response) => setWisdomQuote(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getFamousQuote();
    getInspirationalQuote();
    getWisdomQuote();
  }, []);

  return (
    <div className="bg-amber-400 h-screen">
      {/* Quote Buttons */}
      <div className=" p-5">
        <button className="px-5 py-2 my-3 mx-3 text-white rounded-full bg-pink-500 hover:bg-pink-600 hover:text-white">
          Famous Quote
        </button>
        <button className="px-5 py-2 my-3 mx-3 text-white rounded-full bg-pink-500 hover:bg-pink-600 hover:text-white">
          Inspirational Quote
        </button>
        <button className="px-5 py-2 my-3 mx-3 text-white rounded-full bg-pink-500 hover:bg-pink-600 hover:text-white">
          Wisdom Quote
        </button>
      </div>

      {/* Famous Quotes */}
      <div>
        {famousQuote && (
          <div className="p-5 bg-blue-300 mx-20 my-5 rounded-full flex-col">
            <h6>- - Famous Quote Example Placeholder - -</h6>
            <h3 className="p-2 text-2xl">{famousQuote.content}</h3>
            <h4 className="p-2 text-1xl">{famousQuote.author}</h4>
            <button className="px-3 my-3 mx-3 rounded-full bg-pink-300 hover:bg-pink-500 hover:text-white">
              <img className="w-10" src={addToFavoritesImg} />
            </button>
          </div>
        )}
      </div>

      {/* Inspirational Quotes */}
      <div>
        {inspirationalQuote && (
          <div className="p-5 bg-blue-300 mx-20 my-5 rounded-full flex-col">
            <h6>- - Inspirational Quote Example Placeholder - -</h6>
            <h3 className="p-2 text-2xl">{inspirationalQuote.content}</h3>
            <h4 className="p-2 text-1xl">{inspirationalQuote.author}</h4>
            <button className="px-3 my-3 mx-3 rounded-full bg-pink-300 hover:bg-pink-500 hover:text-white">
              <img className="w-10" src={addToFavoritesImg} />
            </button>
          </div>
        )}
      </div>

      {/* Famous Quotes */}
      <div>
        {wisdomQuote && (
          <div className="p-5 bg-blue-300 mx-20 my-5 rounded-full flex-col">
            <h6>- - Wisdom Quote Example Placeholder - -</h6>
            <h3 className="p-2 text-2xl">{wisdomQuote.content}</h3>
            <h4 className="p-2 text-1xl">{wisdomQuote.author}</h4>
            <button className="px-3 my-3 mx-3 rounded-full bg-pink-300 hover:bg-pink-500 hover:text-white">
              <img className="w-10" src={addToFavoritesImg} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuotesPage;
