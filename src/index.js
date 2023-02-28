import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderApp() {
  const { users } = store.getState().users;
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        {users ? <App /> : <LogIn onLogin={renderApp} />}
      </Provider>
    </React.StrictMode>
  );
}

renderApp();
