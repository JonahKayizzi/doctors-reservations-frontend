/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineInstagram } from '@react-icons/all-files/ai/AiOutlineInstagram';
import { AiOutlineTwitter } from '@react-icons/all-files/ai/AiOutlineTwitter';
import { TiSocialGooglePlus } from '@react-icons/all-files/ti/TiSocialGooglePlus';
import { FaPinterestP } from '@react-icons/all-files/fa/FaPinterestP';
import { IoLogoVimeo } from '@react-icons/all-files/io5/IoLogoVimeo';

const NavPanel = () => {
  const inactive = 'h-14 text-sm md:text-lg md:h-auto font-semibold md:font-bold py-2 flex items-center justify-center hover:bg-lime-600 hover:text-white';
  const activeClassName = `text-white active-green ${inactive}`;
  return (
    <div className="flex flex-wrap h-full w-1/4">
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
      <div className="w-full flex flex flex-row justify-center">
        <ul className="flex gap-1">
          <li>
            <AiOutlineInstagram />
          </li>
          <li>
            <AiOutlineTwitter />
          </li>
          <li>
            <TiSocialGooglePlus />
          </li>
          <li>
            <FaPinterestP />
          </li>
          <li>
            <IoLogoVimeo />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavPanel;
