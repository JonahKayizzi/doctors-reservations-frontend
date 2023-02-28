import React from 'react';
import { Link } from 'react-router-dom';

const DoctorDetails = () => (
  <div>
    <h1>Displays the details of a doctor</h1>
    <br />
    <br />
    {/* This link was added to test reserve from doctor_detail feature */}
    {/* Use the this as a reference, customized as you want */}
    {/* and placing the link/button wherever you want */}
    <Link to={`/add_appointment/${8}`} style={{ color: 'blue' }}>Reserve</Link>
  </div>
);

export default DoctorDetails;
