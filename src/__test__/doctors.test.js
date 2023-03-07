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
});
const route = '/';
window.history.pushState({}, 'Doctor Details', route);

describe('Doctors page', () => {
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
    const doctorImg = screen.getAllByAltText(/doctor pic/i)[0];
    const doctorName = screen.getAllByText(/Peter Omaha/i)[0];
    const doctorSpeciality = screen.getAllByText(/General Practice/i)[0];

    expect(doctorImg).toHaveAttribute(
      'src',
      'https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg',
    );
    expect(doctorName).toBeInTheDocument();
    expect(doctorSpeciality).toBeInTheDocument();
  });

  test('redirects user to doctorDetails when doctors image is clicked', () => {
    const doctorImg = screen.getAllByAltText(/doctor pic/i)[0];
    fireEvent.click(doctorImg);

    const doctorDescription = screen.getAllByText(/Gradutated in the US, have six diplomas in medical genetic,/i)[0];
    expect(doctorDescription).toBeInTheDocument();
  });
});
