import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';



// axios 
import axios from 'axios'
import { localtoken } from './constains/index';
axios.defaults.baseURL = "http://localhost:5000/"
axios.defaults.headers.common["Content-Type"] = "application/json"



// Token
let token = localStorage.getItem(localtoken)
if (token) axios.defaults.headers.common['token'] = token;


// styles
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Toast
import { ToastContainer } from 'react-toastify';

//  Router
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Router>
		<React.StrictMode>
			<Provider store={store}>
				<App />
				<ToastContainer theme='colored' />
			</Provider>
		</React.StrictMode>
	</Router>,
);
