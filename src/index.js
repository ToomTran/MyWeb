import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import reportWebVitals from './reportWebVitals';
import './sass/index.scss';
import './assets/boxicons-2.1.1/css/boxicons.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
