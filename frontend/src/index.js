import React from 'react';
import ReactDOM from 'react-dom';
import {ToastContainer} from 'react-toastify'
import 'bootswatch/dist/pulse/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
   <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
  </React.StrictMode>,
  document.getElementById('root')
);

