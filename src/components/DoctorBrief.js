/* eslint max-len: ["error", { "code": 200 }] */
import React from 'react';
import PropTypes from 'prop-types';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';
import {
  TiSocialInstagram, TiSocialTwitter, TiSocialFacebook,
} from 'react-icons/ti';
import doctorBg from '../assets/doctor-brief-bg.png';

const DoctorBrief = (props) => {
  const {
    id, name, image, speciality,
  } = props;

  return (
    <div className="flex flex-col relative h-full">
      <img src={doctorBg} alt="sitting area" />
      <div className="absolute flex flex-col items-center pt-4 w-full h-full justify-between">
        <Link to={`/doctor/${id}`} className="my-auto hover:opacity-80 hover:scale-110 hover:duration-500">
          <img src={image} alt="doctor pic" />
        </Link>
        <div className="flex flex-col items-center pt-4 w-full gap-1 md:gap-2">
          <h2 className="font-black text-xl">{name.toUpperCase()}</h2>
          <div className="border-b-2 border-gray-200 border-dotted w-1/5" />
          <h3 className="text-gray-500">{speciality}</h3>
          <div className="flex justify-between gap-4 mt-3 md:mt-5">
            <a className="p-1 border-2 rounded-full border-gray-300" href="https://twitter.com/">
              <TiSocialTwitter className="fill-gray-300" />
            </a>
            <a className="p-1 border-2 rounded-full border-gray-300" href="https://www.facebook.com/">
              <TiSocialFacebook className="fill-gray-300" />
            </a>
            <a className="p-1 border-2 rounded-full border-gray-300" href="https://www.instagram.com/">
              <TiSocialInstagram className="fill-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

DoctorBrief.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
};

export default DoctorBrief;
