import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FavoritList from './FavoritList';

function App({ favorite }) {
  return (
    <div className="container">
      <header />

      <Routes>
        <Route path="/favorites" element={<FavoritList favorite={favorite} />} />
      </Routes>

      <footer>
        <span className="legal">Important Legal Information</span>
      </footer>
    </div>
  );
}

export default App;
