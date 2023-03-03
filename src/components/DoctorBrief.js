/* eslint max-len: ["error", { "code": 200 }] */
import React from 'react';
import PropTypes from 'prop-types';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';

const DoctorBrief = (props) => {
  const {
    id, name, image, speciality, description,
  } = props;

  return (
    <div className="flex flex-col relative h-full">
      <Link to={`/doctor/${id}`}>
        <div className="flex flex-col items-center">
          <img src={image} alt="sitting area" className="h-full" />
          <div className="flex flex-col items-center pt-4 w-full">
            <h2 className="font-black text-xl">{name}</h2>
            <div className="border-b-2 border-gray-200 border-dotted w-1/5 my-3" />
            <h3 className="text-gray-500">{speciality}</h3>
            <div>
              Space for social network links
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
