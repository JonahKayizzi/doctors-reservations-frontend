/* eslint-disable import/no-extraneous-dependencies */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchUser } from '../redux/users';

const mockStore = configureMockStore([thunk]);

describe('fetchUser', () => {
  it('should fetch a user', async () => {
    const store = mockStore({});
    await store.dispatch(fetchUser());
    const actions = store.getActions();
    expect(actions[0].type).toEqual('users/fetchUser/pending');
    expect(actions[1].type).toEqual('users/fetchUser/fulfilled');
  });
});
