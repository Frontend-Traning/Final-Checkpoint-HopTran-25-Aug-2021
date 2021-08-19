// import React from 'react';
// import validate from '../../validate';
// import useForm from '../../useForm'
// import './style.scss';
// const SignIn = ({ submitForm }) => {
//   const rules = {
//     email: {
//       required:{
//         value: true;
//         message: 'this field is required'
//       }
//     },
//     password: {
//        required:{
//         value: true;
//         message: 'this field is required'
//       }
//     }
//   }
//   const [{email,username},error, handleChange] = useForm(
//     rules,
//     initData:{
//       email:'',
//       username:'',
//     }
//   );
//   return (
//     <form className="form-sign-in">
//       <h3>Hello World</h3>
//       <div className="input-group ">
//         <label className="form-label">Email</label>
//         <input
//           className="form-input"
//           type="email"
//           name="name"
//           placeholder="Enter your email"
//           value={values.email}
//           onChange={handleChange}
//         />
//         {errors?.email && <p>{errors.email}</p>}
//       </div>
//       <div className="input-group">
//         <label className="form-label">Password</label>
//         <input
//           className="form-input"
//           type="password"
//           name="password"
//           placeholder="Enter your password"
//           value={values?.password}
//           onChange={handleChange}
//         />
//         {errors.password && <p>{errors.password}</p>}
//       </div>
//       <button type="submit">Log in</button>
//     </form>
//   );
// };

// export default SignIn
