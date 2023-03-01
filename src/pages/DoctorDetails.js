import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DoctorDetails = () => {
  const { id } = useParams();
  const doctors = useSelector((state) => state.doctorsReducer.doctors);
  const thisDoctor = doctors.filter((doctor) => doctor.id === parseInt(id, 10));
  return (
    <div className="doctor-container">
      <div className="doctor-image">
        <img src={thisDoctor[0].image} alt="doctor" />
      </div>
      <div className="doctor-info">
        <h1>{thisDoctor[0].name}</h1>
        <p>{thisDoctor[0].speciality}</p>
        <p>{thisDoctor[0].description}</p>
        <p>{thisDoctor[0].graduation}</p>
        <Link
          key={thisDoctor[0].id}
          to={`/add_appointment/${thisDoctor[0].id}`}
        >
          Book an appointment
        </Link>
      </div>
    </div>
  );
};

export default DoctorDetails;
