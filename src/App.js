import React from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import routes from './routes';
import Sms from './components/sms/Sms';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Sms />
				<Link to='/login'>
					<button> Login </button>
				</Link>
				<Link to='/register/usertype'>
					<button> Sign Up </button>
				</Link>
			</div>
			{routes}
		</BrowserRouter>
	);
}

export default App;
