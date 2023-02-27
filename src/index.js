import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import LogIn from './pages/LogIn';
import store from './redux/configureStore';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const { users } = store.getState().users;
root.render(
  <React.StrictMode>
    <Provider store={store}>{users ? <App /> : <LogIn />}</Provider>
  </React.StrictMode>,
);
