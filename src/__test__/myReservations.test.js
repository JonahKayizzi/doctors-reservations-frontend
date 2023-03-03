import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MyReservations from '../pages/MyReservations';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('MyReservations', () => {
  it('should render correctly', () => {
    const store = mockStore({
      doctorsReducer: {
        doctors: [
          {
            id: 7,
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
            id: 8,
            date: '03/03/2023',
            city: 'Kampala',
            user_id: 9,
            doctor_id: 7,
          },
        ],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <MyReservations />
      </Provider>,
    );

    // Check that the component renders the expected information
    expect(getByText(/My appointments/i)).toBeInTheDocument();
    expect(getByText(/Peter Omaha/i)).toBeInTheDocument();
    expect(getByText(/General Practice/i)).toBeInTheDocument();
    expect(getByText(/Friday, 3 March 2023/i)).toBeInTheDocument();
    expect(getByText(/Kampala/i)).toBeInTheDocument();
  });
});
