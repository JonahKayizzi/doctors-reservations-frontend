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
    <div>
      <h1>My Appointments</h1>
      {reservations.map((reservation) => {
        const reservedDoctor = doctors.find(
          (doctor) => doctor.id === reservation.doctor_id,
        );
        return (
          <div key={reservation.id}>
            <div className="doc-img">
              <img src={reservedDoctor.image} alt="doctor" />
            </div>
            <div className="res-detail">
              <p>{reservation.date}</p>
              <p>{reservation.city}</p>
              <p>{reservedDoctor.name}</p>
              <p>{reservedDoctor.speciality}</p>
              <p>{reservedDoctor.graduation}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyReservations;
