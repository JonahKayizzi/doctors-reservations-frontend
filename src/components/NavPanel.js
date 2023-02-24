import React from 'react';
import { NavLink } from 'react-router-dom';

const NavPanel = () => {
  const inactive = ' text-lg font-bold py-2';
  const activeClassName = `text-white active-green${inactive}`;
  return (
    <div className="flex flex-wrap h-full w-1/5">
      <img src="#" alt="logo" className="w-full" />
      <div className="flex flex-col justify-self-center justify-center w-full">
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
