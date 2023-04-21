import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [error, setError] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', Object.fromEntries(new FormData(e.target)));
      console.log(res);
      if (res.status === 200) {
        window.location = '/';
      }
    } catch (errors) {
      setError(true);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Ваш email
          <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="email" />

        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Ваш пароль
          <input type="password" name="password" className="form-control" id="exampleFormControlInput1" placeholder="password" />

        </label>
      </div>
      <button type="submit">Войти</button>
      {error ? <p style={{ color: 'red', fontWeight: '900' }}>Неправильный пароль или email!</p> : null}
    </form>
  );
}
