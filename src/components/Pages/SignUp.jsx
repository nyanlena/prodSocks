import React from 'react';
import axios from 'axios';

const backgroundStyle = {
  backgroundImage:
    "url('https://www.dhresource.com/0x0/f2/albu/g15/M01/4F/E9/rBVa3V9zlnmABfySAAP62IopYs4099.jpg')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  // width: '100vw',
};

// export default function SignUp() {
//   const submitHandler = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post(
//         '/auth/signup',
//         Object.fromEntries(new FormData(event.target)),
//       );
//       const newUser = response.data;
//       if (response.status === 200) {
//         window.location = '/';
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
export default function SignUp() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post('/auth/signup', Object.fromEntries(new FormData(e.target)));
    if (res.status === 200) {
      window.location = '/';
    }
  };

  return (
    <div style={backgroundStyle}>
      <form onSubmit={submitHandler}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
                    <p className="text-white-50 mb-5">Please enter your username!</p>

                    <div className="form-outline form-white mb-4">
                      <input
                        name="name"
                        type="text"
                        id="typeUserName"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeUserName">
                        User name
                      </label>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">
                        Ваш email
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="email"
                        />
                      </label>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">
                        Придумайте пароль
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="password"
                        />
                      </label>
                    </div>

                    <button className="btn btn-outline-light btn-lg px-5" type="submit">
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
// import React from 'react';
// import axios from 'axios';

// export default function SignUp() {
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const res = await axios.post('/auth/signup', Object.fromEntries(new FormData(e.target)));
//     if (res.status === 200) {
//       window.location = '/';
//     }
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="mb-3">
//         <label htmlFor="exampleFormControlInput1" className="form-label">
//           Ваш email
//           <input
//             type="email"
//             name="email"
//             className="form-control"
//             id="exampleFormControlInput1"
//             placeholder="email"
//           />
//         </label>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="exampleFormControlInput1" className="form-label">
//           Ваше имя
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             id="exampleFormControlInput1"
//             placeholder="username"
//           />
//         </label>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="exampleFormControlInput1" className="form-label">
//           Придумайте пароль
//           <input
//             type="password"
//             name="password"
//             className="form-control"
//             id="exampleFormControlInput1"
//             placeholder="password"
//           />
//         </label>
//       </div>

//       <button type="submit">Регистрация</button>
//     </form>
//   );
// }
