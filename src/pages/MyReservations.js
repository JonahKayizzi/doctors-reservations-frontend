import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReservations } from '../redux/reservations/reservationsSlice';
import { getDoctorsData } from '../redux/doctors/doctorsSlice';

const MyReservations = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctorsReducer.doctors);
  const reservations = useSelector(
    (state) => state.reservationsReducer.reservations
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
            (doctor) => doctor.id === reservation.doctor_id
          );
          return (
            <div
              className="flex justify-around p-6  border border-lime-200 bg-slate-100"
              key={reservation.id}
            >
              <p className="w-1/4 font-bold">
                <span className="font-light text-sm">when: </span>
                {new Date(reservation.date).toLocaleDateString('en-GB', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>

              <p className="w-1/4 font-bold">
                <span className="font-light text-sm">where: </span>
                {reservation.city}
              </p>
              <p className="w-1/6 text-right text-lg">{reservedDoctor.name}</p>
              <p className="w-1/6 text-base">{reservedDoctor.speciality}</p>
              <div className="w-1/6 flex justify-start">
                <img
                  className="w-1/4 rounded-full border-2 border-lime-400"
                  src={reservedDoctor.image}
                  alt="doctor"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyReservations;
