import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getDoctorsData } from '../redux/doctors/doctorsSlice';
import { addReservation } from '../redux/reservations/reservationsSlice';

const ReservationForm = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctorsReducer.doctors);
  const [reservation, setReservation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(getDoctorsData());
    }
  }, [dispatch, doctors]);

  const handleChange = (e) => {
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = JSON.parse(sessionStorage.getItem('user_id'));
    console.log(userId);
    console.log({ ...reservation, user_id: userId });
    dispatch(addReservation({ ...reservation, user_id: userId }));
    alert('Appointment succesfully booked!');
    navigate('/appointments');
  };

  return (
    <div className="w-3/4 flex flex-col items-center">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input type="text" name="city" placeholder="City" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <select name="doctor_id" onChange={handleChange} required>
          <option disabled selected value> -- select an option -- </option>
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

export default ReservationForm;
