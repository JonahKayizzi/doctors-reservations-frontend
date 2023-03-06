import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Doctors from '../pages/Doctors';

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
});
const route = '/';
window.history.pushState({}, 'Doctor Details', route);

describe('Doctors', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Doctors />} />
          </Routes>
        </Router>
      </Provider>,
    );
  });

  test('renders doctor details correctly', () => {
    const doctorImg = screen.getAllByAltText(/doctor pic/i)[0];
    const doctorName = screen.getAllByAltText(/doctor pic/i)[0];
    const doctorSpeciality = screen.getAllByText(/General Practice/i)[0];

    expect(doctorImg).toHaveAttribute(
      'src',
      'https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg',
    );
    expect(doctorName).toBeInTheDocument();
    expect(doctorSpeciality).toBeInTheDocument();
  });
});
