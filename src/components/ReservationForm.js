import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { getDoctorsData } from '../redux/doctors/doctorsSlice';
import { addReservation } from '../redux/reservations/reservationsSlice';

const cities = [
  { id: 1, name: 'New York City' },
  { id: 2, name: 'Los Angeles' },
  { id: 3, name: 'San Francisco' },
  { id: 4, name: 'Seattle' },
  { id: 5, name: 'Boston' },
  { id: 6, name: 'Philadelphia' },
  { id: 7, name: 'Washington D.C.' },
  { id: 8, name: 'Atlanta' },
  { id: 9, name: 'Miami' },
  { id: 10, name: 'New Orleans' },
];

const ReservationForm = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctorsReducer.doctors);
  const navigate = useNavigate();
  const { id: doctorId } = useParams();
  const currentDoctor = doctors.filter((doctor) => doctor.id === parseInt(doctorId, 10))[0];

  const [reservation, setReservation] = useState({
    doctor_id: doctorId,
    user_id: JSON.parse(sessionStorage.getItem('user')),
  });

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
    dispatch(addReservation(reservation));
    alert('Appointment succesfully booked!');
    navigate('/appointments');
  };

  return (
    <div className="w-3/4 flex flex-col items-center">
      { doctorId !== undefined && (
        <div>
          <p>
            Book an appointment with Dr.
            {' '}
            {currentDoctor.name}
          </p>
          <img src={currentDoctor.image} alt="doctor" style={{ width: '150px' }} />
          <br />
          <br />
        </div>
      )}

      <form className="flex flex-col" onSubmit={handleSubmit}>

        <select name="city" onChange={handleChange} required>
          <option disabled selected value> -- select a city -- </option>
          {cities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>

        <input type="date" name="date" onChange={handleChange} required />

        { doctorId === undefined && (
          <select name="doctor_id" onChange={handleChange} required>
            <option disabled selected value> -- select a doctor -- </option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            ))}
          </select>
        )}

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default ReservationForm;
