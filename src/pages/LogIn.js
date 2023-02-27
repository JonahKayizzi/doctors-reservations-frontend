import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../redux/users';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const onChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(fetchUser(username));
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={onChange}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LogIn;
