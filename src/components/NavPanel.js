/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  TiSocialGooglePlus,
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialVimeo,
  TiSocialPinterest,
} from 'react-icons/ti';
import { slide as Menu } from 'react-burger-menu';
import logo from '../assets/logo.png';
import cutdown from '../assets/logo-cutdown.png';

const NavPanel = () => {
  const inactive = 'h-14 text-sm md:text-lg md:h-auto font-semibold md:font-bold py-2 px-1 flex items-center justify-center hover:bg-lime-600 hover:text-white';
  const activeClassName = `text-white active-green ${inactive}`;
  const [menuOpen, setMenuOpen] = useState(false);

  const burgerstyles = {
    bmBurgerButton: {
      top: '12px',
      left: '20px',
      width: '40px',
      height: '40px',
      position: 'absolute',
      padding: '1rem',
    },
    bmCrossButton: {
      top: '5px',
      position: 'absolute',
      height: '48px',
      width: '48px',
      right: '12px',
    },
    bmCross: {
      display: 'inline-block',
      height: '40px',
      width: '5px',
      top: '-2px',
      right: '7px',
    },
  };

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <div className="flex fixed p-1 md:hidden w-screen bg-white h-18 items-center justify-center border-b z-50">
        <Menu
          isOpen={menuOpen}
          onStateChange={(state) => handleStateChange(state)}
          width="100%"
          styles={burgerstyles}
        >
          <NavLink
            className={({ isActive }) => (isActive ? activeClassName : inactive)}
            to="/"
            onClick={closeMenu}
          >
            Doctors
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeClassName : inactive)}
            to="/add_appointment"
            onClick={closeMenu}
          >
            Make Appointment
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeClassName : inactive)}
            to="/appointments"
            onClick={closeMenu}
          >
            My Appointments
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeClassName : inactive)}
            to="/add_doctor"
            onClick={closeMenu}
          >
            Add Doctor
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeClassName : inactive)}
            to="/delete_doctor"
            onClick={closeMenu}
          >
            Remove Doctor
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeClassName : inactive)}
            to="/logout"
          >
            <p className="text-xs text-bold text-center">
              {sessionStorage.getItem('username')}
            </p>
            Logout
          </NavLink>
        </Menu>
        <img
          src={cutdown}
          alt="logo"
          className="w-30 h-14 md:h-full self-center"
        />
      </div>
      <div className="hidden md:flex flex-col h-full w-1/4 md:w-48 border-r-4 border-lime-500">
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
        <div>
          <p className="text-s text-bold text-center">
            {sessionStorage.getItem('username')}
          </p>
        </div>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : inactive)}
          to="/logout"
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default NavPanel;
