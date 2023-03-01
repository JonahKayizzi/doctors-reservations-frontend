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
    <div className="w-3/4 flex flex-col items-center bg-lime-500 text-white">
      <div className="w-full md:w-1/2 pl-0.5 pt-8 md:pt-9 md:pl-0 bg-lime-500">
        <h1 className="text-left pb-3 font-bold text-2xl">Delete Doctors:</h1>
        <ul className="p-1">
          {doctors.map((doctor) => (
            <li className="w-full flex justify-between items-center font-bold p-0.5 py-1 md:py-2.5 border-b-2 border-lime-900 last:border-b-0" key={doctor.id}>
              <img src={doctor.image} alt={doctor.name} className="w-12 h-12 md:w-20 md:h-20 rounded-2xl" />
              <div className="text-sm md:text-base w-2/3 flex justify-between items-center p-1 md:p-3 text-lime-900 bg-lime-300 border-lime-700 border-black rounded-md md:rounded-2xl">
                {doctor.name}
                <button
                  className="btn text-red-500 border-2 border-red-500 bg-white hover:bg-red-500 hover:text-white"
                  type="button"
                  onClick={() => { handleClick(doctor.id); }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeleteDoctor;
