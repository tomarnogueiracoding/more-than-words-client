import axios from 'axios';
import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5005';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { query };

    axios
      .get(`${API_URL}/api/quotes/search`, body)
      .then((response) => {
        setResults(response.data);
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
      {results.length > 0 &&
        results.map((quote) => {
          return (
            <div>
              <p>{quote.content}</p>
              <p>{quote.author}</p>
            </div>
          );
        })}
    </>
  );
}

export default SearchPage;
