import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    <li key={doctor.id} style={{ width: '200px' }}>
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
    </li>
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
