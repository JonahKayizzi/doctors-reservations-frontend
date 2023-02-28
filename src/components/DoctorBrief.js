import React from 'react';
import PropTypes from 'prop-types';

const DoctorBrief = (props) => {
  const { id, name } = props;

  return (
    <div id={id}>
      <h2>{name}</h2>
    </div>
  );
};

DoctorBrief.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default DoctorBrief;
