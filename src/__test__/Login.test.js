/* eslint-disable import/no-extraneous-dependencies */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import { fetchUser } from '../redux/users';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchUser', () => {
  it('should fetch a user', async () => {
    const store = mockStore({});
    const response = {
      id: 1,
    };
    fetch.mockResponse(JSON.stringify(response));
    await store.dispatch(fetchUser());
    const actions = store.getActions();
    expect(actions[0].type).toEqual('users/fetchUser/pending');
    expect(actions[1].type).toEqual('users/fetchUser/fulfilled');
  });
});
