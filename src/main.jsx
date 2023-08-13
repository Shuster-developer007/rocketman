import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



// styles
import 'react-toastify/dist/ReactToastify.css'
import './index.css'


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'


// Toast
import { ToastContainer } from "react-toastify";


//  Router
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <App />
      <ToastContainer theme='colored' />
    </React.StrictMode>
  </Router>,
)
