import React from 'react';
import PropTypes from 'prop-types';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';

const DoctorBrief = (props) => {
  const {
    id, name, image, speciality,
  } = props;

  return (
    <Link to={`/doctor/${id}`}>
      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
        <img src={image} alt="sitting area" className="object-cover object-center w-full" />
        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
          <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{name}</h2>
          <div className="flex h-full items-end pb-6">
            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{speciality}</h3>
          </div>
        </div>
      </div>
    </Link>
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
