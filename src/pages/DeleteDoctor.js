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
    <div className="w-full flex flex-col items-center">
      <h1>Delete Doctor</h1>
      <div>
        {doctors.map((doctor) => (
          <div key={doctor.id}>
            {doctor.name}
            <button
              className="btn"
              type="button"
              onClick={() => { handleClick(doctor.id); }}
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
