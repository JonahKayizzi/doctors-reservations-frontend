import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DoctorDetails = () => {
  const { id } = useParams();
  const doctors = useSelector((state) => state.doctorsReducer.doctors);
  const thisDoctor = doctors.filter((doctor) => doctor.id === parseInt(id, 10));

  return (
    <div className="flex md:w-3/4 flex-col lg:flex-row p-10 py-20 justify-between">
      <div className="flex items-center w-full lg:w-1/2">
        <img src={thisDoctor[0].image} alt="doctor" />
      </div>
      <div className="flex flex-col justify-start items-end w-full lg:w-1/3 text-right gap-2">
        <h1 className="font-bold text-4xl">{thisDoctor[0].name}</h1>
        <p className="p-0 w-full font-bold text-xs">
          Verified by the Ministry of Health
        </p>
        <p className="flex justify-between p-4 w-full bg-slate-100">
          <span>Speciality</span>
          <span>{thisDoctor[0].speciality}</span>
        </p>
        <p className="p-4 w-full flex justify-between">
          <span>Graduated</span>
          <span>{thisDoctor[0].graduation}</span>
        </p>
        <p className="p-4 w-full bg-slate-100 text-justify">
          {thisDoctor[0].description}
        </p>

        <Link
          className="mt-auto p-4 w-2/3 bg-lime-600 text-white text-center rounded-3xl"
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
