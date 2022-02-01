import React from 'react';
import ReactDOM from 'react-dom';
import './indexOutput.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

process.env.BASE_URL = 'https://ali3nnn.github.io/foodDelivery/'

ReactDOM.render(
  <BrowserRouter basename={process.env.BASE_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
