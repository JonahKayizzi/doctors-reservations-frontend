import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DoctorDetails from '../pages/DoctorDetails';
import store from '../redux/configureStore';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('DoctorDetails', () => {
  test('renders doctor details correctly', () => {
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

    const route = '/doctors/1';
    window.history.pushState({}, 'Doctor Details', route);

    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/doctors/:id" element={<DoctorDetails />} />
          </Routes>
        </Router>
      </Provider>,
    );

    expect(screen.getByAltText('doctor')).toHaveAttribute(
      'src',
      'https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg',
    );
    expect(screen.getByText('Peter Omaha')).toBeInTheDocument();
    expect(screen.getByText('General Practice')).toBeInTheDocument();
    expect(screen.getByText('05/02/2010')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Gradutated in the US, have six diplomas in medical genetic, also have a PhD in medicine and a master in medical genetics.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Book an appointment')).toHaveAttribute(
      'href',
      '/add_appointment/1',
    );
  });
});
