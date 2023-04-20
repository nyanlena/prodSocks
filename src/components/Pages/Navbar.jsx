import React from 'react';
import axios from 'axios';

export default function Navbar({ user }) {
  const clickHandlerSignUp = async () => {
    const res = await axios('/user/signup');
    if (res.status === 200) {
      window.location = '/user/signup';
    }
  };

  const clickHandlerLogin = async () => {
    const res = await axios('/user/login');
    if (res.status === 200) {
      window.location = '/user/login';
    }
  };

  const clickHandler = async () => {
    const res = await axios('/auth/logout');
    if (res.status === 200) {
      window.location = '/';
    }
  };
  return (
    <div>
      <img src="../images.logo.png" alt="logo" />
      {!user && <button type="button" onClick={clickHandlerSignUp}>Регестрация</button>}
      {!user && <button type="button" onClick={clickHandlerLogin}>Вход</button>}
      {user && <button type="button" onClick={clickHandler}>Выйти</button>}
      {user && <a href="/user/favorite">Избранное</a>}
      {user && <a href="/user/basket">Корзина</a>}
    </div>
  );
}
