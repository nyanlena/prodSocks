import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FavoritList from './FavoritList';
import BuyList from './BuyList';

function App({ favorite, buy }) {
  return (
    <div className="container">
      <header />

      <Routes>
        <Route path="/favorites" element={<FavoritList favorite={favorite} />} />
        <Route path="/buy" element={<BuyList buy={buy} />} />
      </Routes>

      <footer />
    </div>
  );
}

export default App;
