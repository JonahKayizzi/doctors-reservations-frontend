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
    <Link to={`/doctor/${id}`}>
      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
        <img src={image} alt="sitting area" className="h-2/3" />
        <div className="absolute">
          <h2 className="text-white">{name}</h2>
          <div className="flex flex-col h-1/3 items-end w-full items-center">
            <h3 className="text-white">{speciality}</h3>
            {/* <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{description}</h3> */}
            <p>{description}</p>
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
