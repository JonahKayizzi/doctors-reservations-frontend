/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUser } from '../redux/users';
import logo from '../assets/logo.png';
import doctors from '../assets/doctors.png';

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
    <div className="flex flex-col-reverse sm:flex-col-reverse sm:items-center sm:justify-center lg:flex-row lg:justify-between">
      <div className="flex flex-col bg-lime-500 items-center justify-center h-96 lg:w-full lg:h-screen">
        <form
          className="flex flex-col items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleLogin}
        >
          <img className="w-1/4" src={logo} />
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                name="username"
                placeholder="Username"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-lime-400 hover:bg-lime-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
      <div className="w-full flex gap-3  items-center flex-col bg-white">
        <h1 className="text-2xl text-green-700 font-Montserrat hover:text-lime-800">
          We Take Care of your Health
        </h1>
        <img src={doctors} alt="doctors" />
      </div>
    </div>
  );
};

LogIn.defaultProps = {
  onLogin: () => {},
};

export default LogIn;
