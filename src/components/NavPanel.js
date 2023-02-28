import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavPanel = () => {
  const inactive = 'h-14 text-sm md:text-lg md:h-auto font-semibold md:font-bold py-2 flex items-center justify-center hover:bg-lime-600 hover:text-white';
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
      <div className="w-full flex">
        <button type="button">
          social media placeholder
        </button>
      </div>
    </div>
  );
};

export default NavPanel;
