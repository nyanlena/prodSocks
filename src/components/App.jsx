import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Main from './Pages/Main';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Generator from "./Generator";
import FavoritList from './FavoritList';
import BuyList from './BuyList';
import React from 'react';

export default function App({ user, allColor, allPicture, allPattern, arr1, buy }) {
  return (
    <div className="container">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Main user={user} />} />
        <Route path="/user/signup" element={<SignUp />} />
        <Route path="/user/login" element={<Login />} />
        <Route
          path="/generator"
          element={
            <Generator
              user={user}
              allColor={allColor}
              allPicture={allPicture}
              allPattern={allPattern}
            />
          }/>
          <Route path="/favorites" element={<FavoritList arr1={arr1} />} />
        <Route path="/buy" element={<BuyList buy={buy} />} />
      </Routes>
    </div>
  )
}
