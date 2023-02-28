import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import LogIn from './pages/LogIn';
import App from './App';
import './index.css';
import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderApp() {
  const { users } = store.getState().users;
  root.render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          {sessionStorage.getItem('user') || users ? (
            <App />
          ) : (
            <LogIn onLogin={renderApp} />
          )}
        </Provider>
      </Router>
    </React.StrictMode>
  );
}

renderApp();
