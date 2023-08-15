import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import './Styles/Global.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Toast stilini ekleyin

ReactDOM.render(
  <BrowserRouter>
    <ToastContainer />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);



