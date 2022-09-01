import axios from 'axios';
import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5005';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [getResults, setGetResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    /*  const body = { query }; */

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
    <>
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <input name="search" value={query} onChange={handleQuery} />
        <button type="submit">Search</button>
      </form>
      {getResults.length > 0 &&
        getResults.map((quote) => {
          return (
            <div>
              <p>{quote.content}</p>
              <p>{quote.author}</p>
              {/* <p>{quote.author}</p> */}
            </div>
          );
        })}
    </>
  );
}

export default SearchPage;
