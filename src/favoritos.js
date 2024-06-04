import React from 'react';
import { connect } from 'react-redux';

const Favorites = ({ favoriteFacts }) => {
  return (
    <div className="favorites">
      <h2>Mis Favoritos</h2>
      {favoriteFacts.length > 0 ? (
        <ul className="favorites-list">
          {favoriteFacts.map((fact) => (
            <li key={fact.id}>
              <div>
                <strong>Fact:</strong> {fact.value}
              </div>
              <div>
                <strong>Fecha de creación:</strong> {fact.created_at}
              </div>
              {fact.categories.length > 0 && (
                <div>
                  <strong>Categorías:</strong> {fact.categories.join(', ')}
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No has agregado favoritos pipipii.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoriteFacts: state.favoriteFacts,
});

export default connect(mapStateToProps)(Favorites);
