import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const [user, setUser] = useState({
  username:'',
  password: '',
  email: ''
});

const [users, setUsers] = useState([]);
