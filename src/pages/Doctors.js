import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import DoctorBrief from '../components/DoctorBrief';
import { getDoctorsData } from '../redux/doctors/doctorsSlice';

const Doctors = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctorsReducer.doctors);

  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(getDoctorsData());
    }
  }, [dispatch, doctors]);

  const doctorsList = doctors.map((doctor) => (
    <Link key={doctor.id} style={{ width: '200px' }} to={`/doctor/${doctor.id}`}>
      <DoctorBrief
        id={doctor.id}
        name={doctor.name}
        image={doctor.image}
        speciality={doctor.speciality}
        description={doctor.description}
      />
      <div>Space for social networks</div>
      <br />
      <br />
    </Link>
  ));

  return (
    <div>
      <div>
        <h1>Our doctors</h1>
        <p>Check out between the most selected list of doctors around the country</p>
      </div>
      <br />
      <br />
      <ul>
        {doctorsList}
      </ul>
    </div>
  );
};

export default Doctors;
