import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDoctorsData } from '../redux/doctors/doctorsSlice';
import { addReservation } from '../redux/reservations/reservationsSlice';

const AddReservation = () => {
  const [reservation, setReservation] = useState({
    date: '',
    city: '',
    user_id: null,
    doctor_id: null,
  });

  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctorsReducer.doctors);
  useEffect(() => {
    dispatch(getDoctorsData());
    setReservation({
      ...reservation,
      user_id: JSON.parse(sessionStorage.getItem('user_id')),
    });
  }, []);
  console.log(doctors);
  console.log(reservation.user_id);

  const handleChange = (e) => {
    console.log(e);
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(reservation);
    e.preventDefault();
    dispatch(addReservation({ ...reservation }, reservation.user));
  };

  return (
    <div className="w-3/4 flex flex-col items-center">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input type="text" name="city" placeholder="City" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <select name="doctor_id" onChange={handleChange} required>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </select>
        <button type="submit">Make Appointment</button>
      </form>
    </div>
  );
};

export default AddReservation;
