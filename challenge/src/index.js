import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3001";
const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);