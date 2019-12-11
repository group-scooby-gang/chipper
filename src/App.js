import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
// import Sms from './components/sms/Sms';
import Navbar from './components/navbar/navbar';

function App() {
	return (
		<BrowserRouter>
			<div>
				{/* <Sms /> */}
				<Navbar />
			</div>
			{routes}
		</BrowserRouter>
	);
}

export default App;
