import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import router from './router';
import './index.css';
import App from './App';
import { UserProvider } from './UserContext';

const AppWrapper = () => (
  <UserProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </UserProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </React.StrictMode>,
);
