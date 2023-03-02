/* eslint-disable import/no-extraneous-dependencies */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import { deleteDoctor } from '../redux/doctors/doctorsSlice';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('deleteDoctor', () => {
  it('should delete a doctor', async () => {
    const store = mockStore(
      {
        doctors: [
          {
            id: 1,
            name: 'Peter Omaha',
            speciality: 'General Practice',
            description: 'Gradutated in the US, have six diplomas in medical genetic, also have a PhD in medicine and a master in medical genetics.',
            graduation: '05/02/2010',
            image: 'https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg',
          },
        ],
      },
    );
    const response = {
      id: 1,
    };
    fetch.mockResponse(JSON.stringify(response));
    const result = await store.dispatch(deleteDoctor(1));
    const id = result.payload;
    expect(id).toEqual(response);
  });
});
