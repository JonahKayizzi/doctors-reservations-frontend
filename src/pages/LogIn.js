/* eslint-disable jsx-a11y/label-has-associated-control */
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
    <div className="flex flex-col bg-lime-500 items-center justify-center h-screen">
      <form className="flex flex-col items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto" onSubmit={handleLogin}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="username">
              name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="username" placeholder="Username" onChange={onChange} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-lime-400 hover:bg-lime-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

LogIn.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LogIn;
