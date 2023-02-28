import React from 'react';
import DoctorBrief from '../components/DoctorBrief';

const Doctors = () => {
// TBD: Use useSelect method to assign doctors value from reducer's state instead.
  const doctors = [
    {
      name: 'Steven Hobb',
      speciality: 'Dentist',
      graduation: '2001-01-30',
      description: 'Top dentist in the city of New York. Come get your dentals corrected in a single appointment. ',
      image: 'https://static9.depositphotos.com/1037778/1113/i/600/depositphotos_11138153-stock-photo-mature-dentist-surgeon-at-office.jpg',
    },
    {
      name: 'Peter Omaha',
      speciality: 'General Practice',
      graduation: '05/02/2010',
      description: 'Top dentist in the city of New York. Come get your dentals corrected in a single appointment. ',
      image: 'https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg',
    },
  ];

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
