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
    <div className="w-3/4 flex flex-col items-center bg-lime-700">
      <div className="w-5/6 md:w-1/2 pt-9">
        <h1 className="text-left pb-3 font-bold text-white text-2xl">Delete Doctors:</h1>
        <div className="p-1">
          {doctors.map((doctor) => (
            <div className="w-full flex justify-between items-center my-1 text-white font-bold" key={doctor.id}>
              {doctor.name}
              <button
                className="btn text-black bg-white hover:bg-black hover:text-white"
                type="button"
                onClick={() => { handleClick(doctor.id); }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeleteDoctor;
