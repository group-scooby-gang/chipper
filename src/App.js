import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
// import Sms from './components/sms/Sms';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';

function App() {
	return (
		<BrowserRouter>
			<div>
				{/* <Sms /> */}
				<Navbar />
				<Footer />
			</div>
			{routes}
		</BrowserRouter>
	);
}

export default App;
