import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/configureStore';

import LogIn from './pages/LogIn';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderApp() {
  const { users } = store.getState().users;
  root.render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {sessionStorage.getItem('user') || users ? (
              <App />
            ) : (
              <LogIn onLogin={renderApp} />
            )}
          </PersistGate>
        </Provider>
      </Router>
    </React.StrictMode>,
  );
}

renderApp();
