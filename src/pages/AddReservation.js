import React from 'react';
import ReservationForm from '../components/ReservationForm';

const AddReservation = () => (
  <div className="w-3/4 flex flex-col items-center">
    <h2>BOOK A DOCTOR APPOINTMENT</h2>
    <br />
    <br />
    <p>
      Take care of your health, book a doctor&apos;s appointment today.
      Our expert team is ready to provide personalized care and answer any questions you may have.
      Don&apos;t wait, prioritize your well-being now.
    </p>
    <br />
    <br />
    <ReservationForm />
  </div>
);

export default AddReservation;
