import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <button className="px-3 my-3 mx-3 rounded-full bg-pink-400 hover:bg-pink-300 text-white">
          Famous Quote
        </button>
        <button className="px-3 my-3 mx-3 rounded-full bg-pink-400 hover:bg-pink-300 text-white">
          Inspirational Quote
        </button>
        <button className="px-3 my-3 mx-3 rounded-full bg-pink-400 hover:bg-pink-300 text-white">
          Wisdom Quote
        </button>
      </div>
      <hr />

      {/* Famous Quotes */}
      <div>
        {famousQuote && (
          <div className="p-5">
            <h6>- - Famous Quote Example Placeholder - -</h6>
            <h3 className="p-2 text-2xl">{famousQuote.content}</h3>
            <h4 className="p-2 text-1xl">{famousQuote.author}</h4>
            <button className="px-3 my-3 mx-3 rounded-full bg-pink-400 hover:bg-pink-300 text-white">
              Add to Favorites
            </button>
          </div>
        )}
        <hr />
      </div>

      {/* Inspirational Quotes */}
      <div>
        {inspirationalQuote && (
          <div className="p-5">
            <h6>- - Inspirational Quote Example Placeholder - -</h6>
            <h3 className="p-2 text-2xl">{inspirationalQuote.content}</h3>
            <h4 className="p-2 text-1xl">{inspirationalQuote.author}</h4>
            <button className="px-3 my-3 mx-3 rounded-full bg-pink-400 hover:bg-pink-300 text-white">
              Add to Favorites
            </button>
          </div>
        )}
        <hr />
      </div>

      {/* Famous Quotes */}
      <div>
        {wisdomQuote && (
          <div className="p-5">
            <h6>- - Wisdom Quote Example Placeholder - -</h6>
            <h3 className="p-2 text-2xl">{wisdomQuote.content}</h3>
            <h4 className="p-2 text-1xl">{wisdomQuote.author}</h4>
            <button className="px-3 my-3 mx-3 rounded-full bg-pink-400 hover:bg-pink-300 text-white">
              Add to Favorites
            </button>
          </div>
        )}
        <hr />
      </div>
    </div>
  );
}

export default QuotesPage;
