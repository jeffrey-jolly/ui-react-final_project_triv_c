import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppState from './context/AppState'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/reducers/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppState>
  </Provider>

);


