import React, { useState } from 'react';
import { connect } from 'react-redux';
import SearchNorris from './chucknorris.js';
import { addToFavorites } from '../redux/actions.js';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ addToFavorites }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await SearchNorris(searchTerm);
      setSearchResults(response);
    } catch (error) {
      console.error('Error al buscar chistes de Chuck Norris:', error);
      alert('Error al buscar chistes de Chuck Norris: ' + error.message);
    }
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar chistes de Chuck Norris..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}><FaSearch /></button>
      </div>

      <ul className="results">
        {searchResults.map((joke) => (
          <li key={joke.id}>
            <div>
              <strong>Fact:</strong> {joke.value}
            </div>
            <div>
              <strong>Fecha de creación:</strong> {joke.created_at}
            </div>
            {joke.categories.length > 0 && (
              <div>
                <strong>Categorías:</strong> {joke.categories.join(', ')}
              </div>
            )}
            <button className="like-button" onClick={() => addToFavorites(joke)}>Me gusta</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapDispatchToProps = {
  addToFavorites,
};

export default connect(null, mapDispatchToProps)(SearchBar);
