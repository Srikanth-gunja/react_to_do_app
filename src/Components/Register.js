import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
// Import a separate CSS file for styling
import './Register.css'
const Register = () => {
    const navigate=useNavigate();

  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  });

  //const history = useHistory();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.username !== '' && data.email !== '' && data.password !== '') {
      console.log(data);
      // Redirect to the login page after successful signup
      //history.push('/');
      setData({
        username: '',
        email: '',
        password: ''
      });
     navigate('/');
    
    } else {
      alert('Enter all details');
    }
    

  };

  return (
    <div className="register-container">
    <form onSubmit={handleSubmit} className="register-form">
      <input
        placeholder='Username'
        value={data.username}
        name='username'
        onChange={handleChange}
      ></input>
      <br />
      <input
        placeholder='Email'
        value={data.email}
        name='email'
        onChange={handleChange}
      ></input>
      <br />
      <input
        placeholder='Password'
        value={data.password}
        name='password'
        type='password'
        onChange={handleChange}
      ></input>
      <br />
      <input type='submit' value='Signup'></input>
      <Link to='/'>
        <button className='log'>Login</button>
      </Link>
    </form>
  </div>
);
};

export default Register;