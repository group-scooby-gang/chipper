import React from 'react';
import './App.css';
import {BrowserRouter, Link} from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Link to='/register/usertype'>
      <button>Sign Up</button>
      </Link>
    </div>
    {routes}
    </BrowserRouter>
  );
}

export default App;
