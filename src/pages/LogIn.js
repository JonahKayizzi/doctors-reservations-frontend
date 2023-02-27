import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../redux/users';

const LogIn = () => {
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
