import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({ products }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInput = (e) => {
    const input = e.target.value;
    setSearchInput(input);

    if (input.length >= 3) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(input.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar producto"
        value={searchInput}
        onChange={handleSearchInput}
      />
      <Link
        to={{
          pathname: '/productos',
          state: { searchResults },
        }}
      >
        <button>Buscar</button>
      </Link>
      {searchResults.length > 0 && (
        <div className="suggestions">
          {searchResults.map((result) => (
            <div key={result.id} className="suggestion-item">
              {result.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
