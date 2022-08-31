import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5005';

function SearchPage() {
  const [searchQuotes, setSearchQuotes] = useState('');

  const getSearchQuotes = () => {
    axios
      .get(`${API_URL}/quotes/search` + search)
      .then((response) => {
        setSearchQuotes(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSearchQuotes();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input name="search" value={search} onChange={handleChange} />
      {searchQuotes.map((quote) => {
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
