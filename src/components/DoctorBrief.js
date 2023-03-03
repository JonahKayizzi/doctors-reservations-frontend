/* eslint max-len: ["error", { "code": 200 }] */
import React from 'react';
import PropTypes from 'prop-types';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';
import {
  TiSocialInstagram, TiSocialTwitter, TiSocialFacebook,
} from 'react-icons/ti';

const DoctorBrief = (props) => {
  const {
    id, name, image, speciality, description,
  } = props;

  return (
    <div className="flex flex-col relative h-full">
      <Link to={`/doctor/${id}`}>
        <div className="flex flex-col items-center">
          <img src={image} alt="sitting area" />
          <div className="flex flex-col items-center pt-4 w-full gap-1 md:gap-2">
            <h2 className="font-black text-xl">{name}</h2>
            <div className="border-b-2 border-gray-200 border-dotted w-1/5" />
            <h3 className="text-gray-500">{speciality}</h3>
            <div className="flex justify-between w-1/3 md:w-1/2 mt-3 md:mt-5">
              <a className="p-1 border-2 rounded-full border-gray-300" href="https://twitter.com/">
                <TiSocialTwitter className="text-xl fill-gray-300" />
              </a>
              <a className="p-1 border-2 rounded-full border-gray-300" href="https://www.facebook.com/">
                <TiSocialFacebook className="text-xl fill-gray-300" />
              </a>
              <a className="p-1 border-2 rounded-full border-gray-300" href="https://www.instagram.com/">
                <TiSocialInstagram className="text-xl fill-gray-300" />
              </a>
            </div>
          </div>
        </div>
        {/* Next div used to force carousel to work, do not remove */}
        <div className="absolute flex flex-col items-center pt-4 w-full">
          <p className="hidden text-gray-500">
            { description.substring(0, 2) }
          </p>
        </div>
      </Link>
    </div>
  );
};

DoctorBrief.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DoctorBrief;
