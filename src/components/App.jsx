import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Main from './Pages/Main';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Generator from "./Generator";

export default function App({ user, allColor, allPicture, allPattern }) {
  console.log(user, '<--');
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
              allColor={allColor}
              allPicture={allPicture}
              allPattern={allPattern}
            />
          }/>
      </Routes>
    </div>
  )
}
