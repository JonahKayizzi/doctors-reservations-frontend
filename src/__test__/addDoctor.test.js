/* eslint-disable import/no-extraneous-dependencies */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addDoctor } from '../redux/doctors/doctorsSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('addDoctor', () => {
  it('should add a new doctor', async () => {
    const store = mockStore({});
    const doctor = {
      name: 'Peter Omaha',
      speciality: 'General Practice',
      description: 'Gradutated in the US, have six diplomas in medical genetic, also have a PhD in medicine and a master in medical genetics.',
      graduation: '05/02/2010',
      image: 'https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg',
    };
    await store.dispatch(addDoctor(doctor));
    const actions = store.getActions();
    expect(actions[0].type).toEqual('doctors/addDoctor/pending');
    expect(actions[1].type).toEqual('doctors/addDoctor/fulfilled');
  });
});
