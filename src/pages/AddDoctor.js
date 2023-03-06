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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addDoctor({ ...doctor }));
    window.location.href = '/';
  };

  return (
    <div className="w-full h-full md:w-3/4 flex flex-col items-center md:justify-center pt-20 md:p-0 bg-lime-400 ">
      <div className="flex flex-row justify-center bg-white w-80 h-96 p-3 rounded ">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Doctor Name" onChange={handleChange} required className="border rounded-lg py-2 px-3 mb-4" />
          <input type="text" name="speciality" placeholder="Speciality" onChange={handleChange} required className="border rounded-lg py-2 px-3 mb-4" />
          <textarea type="text" name="description" placeholder="Description" onChange={handleChange} className="border rounded-lg py-2 px-3 mb-4" />
          <input type="date" name="graduation" onChange={handleChange} required className="border rounded-lg py-2 px-3 mb-4" />
          <input type="text" name="image" placeholder="Add Image Link" onChange={handleChange} required className="border rounded-lg py-2 px-3 mb-4" />
          <button type="submit" className="bg-lime-400 hover:bg-lime-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add New Doctor</button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
