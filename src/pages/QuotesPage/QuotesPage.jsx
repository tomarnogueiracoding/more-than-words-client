import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:5005';

function QuotesPage() {
  const [randomQuote, setRandomQuote] = useState([]);

  const getRandomQuote = () => {
    axios
      .get(`${API_URL}/api/quotes/random`)
      .then((response) => setRandomQuote(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div>
      {randomQuote && (
        <>
          <h3>{randomQuote.content}</h3>
          <h4>{randomQuote.author}</h4>
        </>
      )}
    </div>
  );
}

export default QuotesPage;
