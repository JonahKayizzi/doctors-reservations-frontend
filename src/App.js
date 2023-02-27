import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddDoctor from './pages/AddDoctor';
import Doctors from './pages/Doctors';
import AddReservation from './pages/AddReservation';
import DeleteDoctor from './pages/DeleteDoctor';
import DoctorDetails from './pages/DoctorDetails';
import MyReservations from './pages/MyReservations';
import LogIn from './pages/LogIn';
import NavPanel from './components/NavPanel';
import './App.css';

function App() {
  return (
    <div className="App flex h-screen">
      <Router>
        <NavPanel />
        <Routes>
          <Route path="/" element={<Doctors />} />
          <Route path="/add_doctor" element={<AddDoctor />} />
          <Route path="/add_appointment" element={<AddReservation />} />
          <Route path="/appointments" element={<MyReservations />} />
          <Route path="/delete_doctor" element={<DeleteDoctor />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
