import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import App from '../App';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  doctorsReducer: {
    doctors: [
      {
        id: 1,
        name: 'Peter Omaha',
        speciality: 'General Practice',
        description:
          'Gradutated in the US, have six diplomas in medical genetic, also have a PhD in medicine and a master in medical genetics.',
        graduation: '05/02/2010',
        image:
          'https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg',
      },
    ],
  },
  reservationsReducer: {
    reservations: [
      {
        id: 1,
        date: '2223-05-16',
        city: 'Atlanta',
        user_id: 1,
        doctor_id: 1,
      },
    ],
  },
});
const route = '/';
window.history.pushState({}, 'Doctor Details', route);

describe('Make Appointments page', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
  });

  test('renders correctly', () => {
    const makeAppointment = screen.getByRole('link', { name: 'Make Appointment' });
    fireEvent.click(makeAppointment);

    const formTitle = screen.getByText(/BOOK A DOCTOR APPOINTMENT/i);
    const cityField = screen.getByText(/Choose a city/i);
    const dateField = screen.getByLabelText(/date-input/i);
    const doctorField = screen.getByText(/Choose a doctor/i);
    const submitBtn = screen.getByText(/Book Now/i);
    expect(formTitle).toBeInTheDocument();
    expect(cityField).toBeInTheDocument();
    expect(dateField).toBeInTheDocument();
    expect(doctorField).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  test('creates a new appointment correctly', () => {
    const makeAppointment = screen.getByRole('link', { name: 'Make Appointment' });
    fireEvent.click(makeAppointment);

    const cityField = screen.getByText(/Choose a city/i);
    const dateField = screen.getByLabelText(/date-input/i);
    const doctorField = screen.getByText(/Choose a doctor/i);
    const submitBtn = screen.getByText(/Book Now/i);
    fireEvent.change(cityField, { target: { value: 'Atlanta' } });
    fireEvent.change(dateField, { target: { value: '2223-05-16' } });
    fireEvent.change(doctorField, { target: { value: 'Peter Omaha' } });
    fireEvent.click(submitBtn);

    const appointmentDoctor = screen.getByText(/Peter Omaha/i);
    const appointmentCity = screen.getByText(/Atlanta/i);
    expect(appointmentDoctor).toBeInTheDocument();
    expect(appointmentCity).toBeInTheDocument();
  });
});
