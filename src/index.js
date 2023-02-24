import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Login from './components/Login';
import store from './redux/configureStore';
import './index.css';
import reportWebVitals from './reportWebVitals';

const { user } = store.getState();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        if (user) <App /> else <Login />
      </Router>
    </Provider>
  </React.StrictMode>
);
