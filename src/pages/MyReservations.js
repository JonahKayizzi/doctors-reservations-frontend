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
    <div>
      <h1>My reservations</h1>
      {reservations.map((reservation) => (
        <div key={reservation.id}>
          {const reservedDoctor = doctors.filter((doctor) => doctor.id === reservation.doctor_id)}
          <div className="doc-img">
            <img src={reservedDoctor[0].image} alt="doctor" />
          </div>
          <p>{reservation.date}</p>
          <p>{reservation.city}</p>
          <p>
            {doctors
              .filter((doctor) => doctor.id === reservation.doctor_id)
              .map((doctor) => doctor.name)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyReservations;
