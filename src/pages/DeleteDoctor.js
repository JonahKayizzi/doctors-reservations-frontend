import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDoctorsData, deleteDoctor } from '../redux/doctors/doctorsSlice';

const DeleteDoctor = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctorsReducer.doctors);
  useEffect(() => {
    dispatch(getDoctorsData());
  }, []);
  const handleClick = (doctor) => {
    dispatch(deleteDoctor(doctor));
  };
  return (
    <div className="w-3/4 flex flex-col items-center">
      <h1>Delete Doctor</h1>
      <div className="w-3/4 md:w-1/2">
        {doctors.map((doctor) => (
          <div
            className="w-100 flex justify-between items-center my-1"
            key={doctor.id}
          >
            {doctor.name}
            <button
              className="btn border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              type="button"
              onClick={() => {
                handleClick(doctor.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteDoctor;
