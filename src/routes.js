import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import App from './App';
import UserType from './components/auth/register/userType/signUpUserType';
import RegisterOwnerInfo from './components/auth/register/ownerInfo/signUpOwnerInfo';
import PetRegisterName from './components/auth/register/petRegistrationInfo/petRegisterName/petRegisterName';
import PetRegisterBreed from './components/auth/register/petRegistrationInfo/petRegisterBreed/petRegisterBreed';
import PetRegisterAge from './components/auth/register/petRegistrationInfo/petRegisterAge/petRegisterAge';
import PetRegisterReview from './components/auth/register/petRegistrationInfo/petRegisterReview/petRegisterReview';
import RegisterWalkerInfo from './components/auth/register/walkerInfo/walkerInfo1/walkerInfo';
import RegisterWalkerInfoStep2 from './components/auth/register/walkerInfo/walkerInfo2/walkerInfo2';
import RegisterWalkerReview from './components/auth/register/walkerInfo/walkerReview/walkerReview';
import Login from './components/login/login';
import WalkerDashboard from './components/dashboard/walker/walkerDashboard';
import WalkerSchedule from './components/schedule/walker/walkerSchedule';
import OwnerDashboard from './components/dashboard/owner/OwnerDashboard';
import Landing from "./components/landing/landing"

export default (
	<Switch>
		<Route component={Landing} exact path='/' />
		<Route component={UserType} path='/register/usertype' />
		<Route component={RegisterOwnerInfo} path='/register/owner/info' />
		<Route component={PetRegisterName} path='/register/pet/name' />
		<Route component={PetRegisterBreed} path='/register/pet/breed' />
		<Route component={PetRegisterAge} path='/register/pet/age' />
		<Route component={PetRegisterReview} path='/register/pet/review' />
		<Route component={RegisterWalkerInfo} exact path='/register/walker/info' />
		<Route component={RegisterWalkerInfoStep2} path='/register/walker/info2' />
		<Route component={RegisterWalkerReview} path='/register/walker/review' />
		<Route component={Login} path='/login' />
		<Route component={WalkerDashboard} path='/walker/dashboard' />
		<Route component={WalkerSchedule} path='/walker/schedule' />
		<Route component={OwnerDashboard} path='/owner/dashboard' />
	</Switch>
);
