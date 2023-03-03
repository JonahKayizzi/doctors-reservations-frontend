import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReservations } from '../redux/reservations/reservationsSlice';
import { getDoctorsData } from '../redux/doctors/doctorsSlice';

const MyReservations = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctorsReducer.doctors);
  const reservations = useSelector(
    (state) => state.reservationsReducer.reservations,
  );
  const userid = sessionStorage.getItem('user');
  useEffect(() => {
    dispatch(getReservations(userid));
    dispatch(getDoctorsData());
  }, []);
  return (
    <div className="p-10">
      <h1 className="font-bold text-4xl m-10 text-lime-600">My appointments</h1>
      <div className="flex flex-col rounded-3xl">
        {reservations.map((reservation) => {
          const reservedDoctor = doctors.find(
            (doctor) => doctor.id === reservation.doctor_id,
          );
          return (
            <div
              className="flex flex-col md:flex-row items-center justify-around p-6 border border-lime-200 bg-slate-100"
              key={reservation.id}
            >
              <div className="flex flex-col md:flex-row w-full md:w-1/2">
                <p className="w-full md:w-1/2 font-bold">
                  <span className="font-light text-sm">when: </span>
                  {new Date(reservation.date).toLocaleDateString('en-GB', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p className="w-full md:w-1/2 font-bold mt-4 md:mt-0">
                  <span className="font-light text-sm">where: </span>
                  {reservation.city}
                </p>
              </div>
              <div className="flex flex-col md:flex-row w-full md:w-1/2">
                <div className="w-1/4 md:w-auto flex justify-center mt-4 md:mt-0">
                  <img
                    className="lg:w-1/6 w-2/3 rounded-full border-2 border-lime-400"
                    src={reservedDoctor.image}
                    alt="doctor"
                  />
                </div>
                <div className="w-3/4 md:w-auto flex flex-col justify-center pl-4">
                  <p className="text-right md:text-left text-lg">
                    {reservedDoctor.name}
                  </p>
                  <p className="text-base">{reservedDoctor.speciality}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyReservations;
