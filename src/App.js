import React, { useState } from 'react';
import { Provider } from 'react-redux';
import SearchBar from './components/searchbar';
import Favorites from './favoritos';
import store from './redux/store';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('search');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <Provider store={store}>
      <div className="background-container"> 
        <div className="background-overlay"></div> 
      </div>
      <div className="container">
        <h1>Chuck Norris las mejores tallas . org</h1>
        <div className="section-buttons">
          <button
            className={activeSection === 'search' ? 'active' : ''}
            onClick={() => handleSectionChange('search')}
          >
            Buscar
          </button>
          <button
            className={activeSection === 'favorites' ? 'active' : ''}
            onClick={() => handleSectionChange('favorites')}
          >
            Ver Mis Favoritos
          </button>
        </div>
        <div className="results-overlay"> 
          {activeSection === 'search' ? <SearchBar /> : <Favorites />}
        </div>
      </div>
    </Provider>
  );
}

export default App;
