/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  TiSocialGooglePlus, TiSocialTwitter, TiSocialFacebook, TiSocialVimeo, TiSocialPinterest,
} from 'react-icons/ti';
import logo from '../assets/logo.png';

const NavPanel = () => {
  const inactive =
    'h-14 text-sm md:text-lg md:h-auto font-semibold md:font-bold py-2 flex items-center justify-center hover:bg-lime-600 hover:text-white';
  const activeClassName = `text-white active-green ${inactive}`;
  return (
    <div className="flex flex-col h-full w-1/4 md:w-48">
      <div className="h-1/8 w-full p-1">
        <img src={logo} alt="logo" className="w-full h-full md:h-full" />
      </div>
      <div className="flex flex-col justify-center w-full">
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : inactive)}
          to="/"
        >
          Doctors
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : inactive)}
          to="/add_appointment"
        >
          Make Appointment
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : inactive)}
          to="/appointments"
        >
          My Appointments
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : inactive)}
          to="/add_doctor"
        >
          Add Doctor
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : inactive)}
          to="/delete_doctor"
        >
          Remove Doctor
        </NavLink>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center px-1 mt-auto mb-12">
        <a href="https://twitter.com/">
          <TiSocialTwitter className="text-2xl" />
        </a>
        <a href="https://www.facebook.com/">
          <TiSocialFacebook className="text-2xl" />
        </a>
        <a href="https://plus.google.com/">
          <TiSocialGooglePlus className="text-2xl" />
        </a>
        <a href="https://vimeo.com/">
          <TiSocialVimeo className="text-2xl" />
        </a>
        <a href="https://www.pinterest.com/">
          <TiSocialPinterest className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default NavPanel;
