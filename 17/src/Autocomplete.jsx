import axios from 'axios';
import React, { useState, useEffect } from 'react';

// BEGIN (write your solution here)
const Autocomplete = () => {
  const [query, setQuery] = useState(''); 
  const [suggestions, setSuggestions] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    if (query.trim() === '') {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);

    axios.get("/countries", { params: { term: query } })
      .then((response) => {
        setSuggestions(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении стран:", error);
        setSuggestions([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]); 

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Country"
          value={query}
          onChange={handleInputChange}
        />
      </form>
      {}
      {(suggestions.length > 0 || isLoading) && (
        <ul>
          {suggestions.map((country) => (
            <li key={country}>{country}</li>
          ))}
          {}
          {isLoading && <li>Loading...</li>}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
// END
