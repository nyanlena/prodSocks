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
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        backgroundImage:
          "url('https://pibig.info/uploads/posts/2022-07/1657199753_2-pibig-info-p-bezhevii-tsvet-fon-2.jpg')",
        border: '3px solid black',
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="./../images.logo.png" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!user && (
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-outline-primary me-2"
                  onClick={clickHandlerSignUp}
                >
                  Регистрация
                </button>
              </li>
            )}
            {!user && (
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-outline-primary me-2"
                  onClick={clickHandlerLogin}
                >
                  Вход
                </button>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-outline-primary me-2"
                  onClick={clickHandler}
                >
                  Выйти
                </button>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <a className="nav-link" href="/favorites">
                  Избранное
                </a>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <a className="nav-link" href="/buy">
                  Корзина
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
