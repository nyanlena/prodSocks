import React from 'react';
import axios from 'axios';

export default function SignUp() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post('/auth/signup', Object.fromEntries(new FormData(e.target)));
    if (res.status === 200) {
      window.location = '/';
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
          Ваше имя
          <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="username" />

        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Придумайте пароль
          <input type="password" name="password" className="form-control" id="exampleFormControlInput1" placeholder="password" />

        </label>
      </div>

      <button type="submit">Регестрация</button>
    </form>
  );
}
