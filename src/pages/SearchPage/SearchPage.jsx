import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

const API_URL = 'http://localhost:5005';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [getResults, setGetResults] = useState([]);
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
        setAddToFavorites(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`https://api.quotable.io/search/quotes?query=${query}` /* , body */)
      .then((response) => {
        setGetResults(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => console.log(error));
  };

  const handleQuery = (e) => setQuery(e.target.value);

  return (
    <div className="bg-gradient-to-r from-amber-400 to-amber-300 min-h-screen py-10">
      <h1 className="text-2xl text-pink-600 my-3 ">Search for a Quote</h1>

      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <input
            className="input input-bordered w-full max-w-xs"
            name="search"
            value={query}
            onChange={handleQuery}
          />
        </div>
        <div className="my-3">
          <button className="btn btn-secondary" type="submit">
            Search
          </button>
        </div>
      </form>
      {getResults.length > 0 &&
        getResults.map((returned) => {
          return (
            <div className="p-5 bg-blue-300 mx-20 my-5 rounded-tl-3xl rounded-br-3xl flex-col">
              <p className="p-2 text-2xl">{returned.content}</p>
              <p className="p-2 text-1xl">{returned.author}</p>
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
          );
        })}
    </div>
  );
}

export default SearchPage;
