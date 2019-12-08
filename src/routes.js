import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import App from './App';
import UserType from './components/auth/register/userType/signUpUserType';
import RegisterOwnerInfo from './components/auth/register/ownerInfo/signUpOwnerInfo';
import Login from './components/login/login';

export default (
	<Switch>
		<Route component={App} exact path='/' />
		<Route component={UserType} path='/register/usertype' />
		<Route component={RegisterOwnerInfo} path='/register/ownerinfo' />
		<Route component={Login} path='/login' />
	</Switch>
);
