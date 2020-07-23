import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import ErrNotice from './errNotice';

function Register() {
  const [user, setUser] = useState({
   username:'',
   password: '',
   confirmPassword: ''
  });
  const [error, setError] = useState(undefined);

  function handleChange(event) {
    const {name, value} = event.target;
    setUser(prevUser => {
      return {
        ...prevUser,
        [name]: value
      };
    });
  }
  const handleClick = async e => {
    e.preventDefault();
    try{
      setUser({
        ...user
      });

        await Axios.post('http://localhost:5000', user)
        setUser({
          ...user,
          username: '',
          password: '',
          confirmPassword: ''
        });


    }
   catch(err){
      err.response.data.msg && setError(err.response.data.msg);
    }
  }


  return (
    <div className="App">
    <div className="wrapper">
      <form className="form-signin">
        <h2 className="form-signin-heading">Please Register</h2>
        {error && (
        <ErrNotice message={error} clearError={() => setError(undefined)} />
      )}
        <input
         type="text" className="form-control" name="username"
         value={user.username} onChange={handleChange}
         placeholder="Username" required="" autoFocus="" />
        <input
         type="password" className="form-control" name="password"
         value={user.password} onChange={handleChange}
         placeholder="Password" required="" />
         <input
          type="password" className="form-control" name="confirmPassword"
          value={user.confirmPassword} onChange={handleChange}
          placeholder="Confirm Password" required="" />
        <button onClick={handleClick} className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
      </form>
    </div>
    </div>
  );
}

export default Register;
