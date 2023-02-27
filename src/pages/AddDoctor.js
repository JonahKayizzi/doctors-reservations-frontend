import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDoctor } from '../redux/doctors/doctorsSlice';

const AddDoctor = () => {
  const [doctor, setDoctor] = useState({
    name: '',
    speciality: '',
    description: '',
    graduation: '',
    image: '',
  });

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addDoctor({ ...doctor }));
  };

  return (
    <div className="w-3/4 flex flex-col items-center">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Doctor Name" onChange={handleChange} required />
        <input type="text" name="speciality" placeholder="Speaciality" onChange={handleChange} required />
        <textarea type="text" name="description" placeholder="Description" onChange={handleChange} />
        <input type="date" name="graduation" onChange={handleChange} required />
        <input type="text" name="image" placeholder="addimagelink" onChange={handleChange} required />
        <button type="submit">Add New Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctor;
