import React from 'react';
import PropTypes from 'prop-types';

const DoctorBrief = (props) => {
  const {
    id, name, image, speciality, description,
  } = props;

  return (
    <div id={id}>
      <img src={image} alt="doctor" />
      <h2>{name}</h2>
      <h3>{speciality}</h3>
      <p>{description}</p>
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
