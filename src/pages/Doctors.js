import React from 'react';
import DoctorBrief from '../components/DoctorBrief';

const Doctors = () => {
  const initialState = [
    {
      id: 1,
      name: "Charles O'neil",
    },
  ];

  const doctorsList = initialState.map((doctor) => (
    <DoctorBrief
      key={doctor.id}
      id={doctor.id}
      name={doctor.name}
    />
  ));

  return (
    <div>
      {doctorsList}
    </div>
  );
};

export default Doctors;
