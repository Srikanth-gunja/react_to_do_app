import React, { useState } from 'react';
import { Link } from 'react-router-dom';

 import './Login.css';
 import { useDispatch } from 'react-redux';
 import { loginFunc } from '../Slices/UserSlice';
const Login = () => {
  const dispatch=useDispatch();
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [warn, setWarn] = useState('');

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setWarn('');
  };

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (data.email !== '' && data.password !== '') {
      dispatch(loginFunc({
        eemail:data.email,
        password:data.password
      })) 
      console.log(data);
      setData({ email: '', password: '' });
      return;
    }
    alert('Enter email or password');
  };


  

  return (
    <div className="login-container">
      <form onSubmit={handleClick} className="login-form">
        <input
        type='email'
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
          className="login-input"
        ></input>
        <span>{warn}</span>
        <br />
        <input
          placeholder="Password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          className="login-input"
        ></input>
        <br />
       <button onClick={handleClick} className='login-button'>login</button>
        <Link to="/register" className="signup-link">
          <button className="signup-button">Sign up</button>
        </Link>
      </form>
    
    </div>
  );
};

export default Login;
