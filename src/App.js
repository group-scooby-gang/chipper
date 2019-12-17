import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
// import Sms from './components/sms/Sms';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
	return (
		<BrowserRouter>
			<div className='app_container'>
				{/* <Sms /> */}
				<div className='app_content'>
				<Navbar />
				{routes}
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
