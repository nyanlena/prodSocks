import React, { useState } from 'react';
import axios from 'axios';

const backgroundStyle = {
backgroundImage:
"url('https://www.dhresource.com/0x0/f2/albu/g15/M01/4F/E9/rBVa3V9zlnmABfySAAP62IopYs4099.jpg')",
height: '100vh',
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
};

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
<div style={backgroundStyle}>
<form onSubmit={submitHandler} className="card p-4 shadow-sm bg-light">
<h2 className="text-center mb-4">Login</h2>
<div className="mb-3">
<label htmlFor="exampleFormControlInput1" className="form-label">
Email address
</label>
<input
         type="email"
         name="email"
         className="form-control"
         id="exampleFormControlInput1"
         placeholder="email"
       />
</div>
<div className="mb-3">
<label htmlFor="exampleFormControlInput1" className="form-label">
Password
</label>
<input
         type="password"
         name="password"
         className="form-control"
         id="exampleFormControlInput1"
         placeholder="password"
       />
</div>
<button type="submit" className="btn btn-primary">
Login
</button>
{error ? (
<p style={{ color: 'red', fontWeight: '900' }}>Incorrect email or password!</p>
) : null}
</form>
</div>
);
}
// import React, { useState } from 'react';
// import axios from 'axios';

// export default function Login() {
//   const [error, setError] = useState(false);
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('/auth/login', Object.fromEntries(new FormData(e.target)));
//       console.log(res);
//       if (res.status === 200) {
//         window.location = '/';
//       }
//     } catch (errors) {
//       setError(true);
//     }
//   };
//   return (
//     <form onSubmit={submitHandler}>
//       <div className="mb-3">
//         <label htmlFor="exampleFormControlInput1" className="form-label">
//           Ваш email
//           <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="email" />

//         </label>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="exampleFormControlInput1" className="form-label">
//           Ваш пароль
//           <input type="password" name="password" className="form-control" id="exampleFormControlInput1" placeholder="password" />

//         </label>
//       </div>
//       <button type="submit">Войти</button>
//       {error ? <p style={{ color: 'red', fontWeight: '900' }}>Неправильный пароль или email!</p> : null}
//     </form>
//   );
// }
