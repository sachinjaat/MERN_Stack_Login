import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import ErrNotice from './errNotice';


function Login() {
  const [user, setUser] = useState({
   username:'',
   password: ''
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
      })
      await Axios.post('http://localhost:5000/login', user)
      setUser({
        ...user,
        username: '',
        password: '',
      });
      window.location='./loggedin';
    }
    catch (err){
      err.response.data.msg && setError(err.response.data.msg);
    }

  }

  return (
    <div className="App">
    <div className="wrapper">
      <form className="form-signin">
        <h2 className="form-signin-heading">Please login</h2>
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
        <button onClick={handleClick} className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
