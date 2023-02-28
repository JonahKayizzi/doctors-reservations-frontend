import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { fetchUser } from '../redux/users';

const LogIn = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    if (users) {
      onLogin();
    }
  }, [users, onLogin]);

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

LogIn.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LogIn;
