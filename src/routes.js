import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
// import App from './App';
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
import OwnerDashboard from './components/dashboard/owner/OwnerDashboard';
import Landing from "./components/landing/landing"
import NewWalkWho from './components/schedule/owner/scheduleNewWalk/who/scheduleNewWalkWho';
import WalkerSelect from './components/schedule/owner/scheduleNewWalk/walkerSelect/scheduleNewWalkWalker';
import WalkDateSelect from './components/schedule/owner/scheduleNewWalk/date/newWalkDate';
import WalkTime from './components/schedule/owner/scheduleNewWalk/time/newWalkTime';
import ExtraNotes from './components/schedule/owner/scheduleNewWalk/extraNotes/newWalkExtraNotes';
import WalkReview from './components/schedule/owner/scheduleNewWalk/review/newWalkReview';
import Profile from "./components/profile/Profile"
import DogProfile from "./components/profile/dogProfile/DogProfile"
import WalkerProfile from "./components/profile/Walker/Walker"
import ViewSchedule from './components/schedule/viewSchedule/ViewSchedule'

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
		<Route component={OwnerDashboard} path='/owner/dashboard' />
		<Route component={NewWalkWho} path='/owner/schedule/new/pet_select' />
		<Route component={WalkerSelect} path='/owner/schedule/new/walker_select' />
		<Route component={WalkDateSelect} path='/owner/schedule/new/select_date' />
		<Route component={WalkTime} path='/owner/schedule/new/select_time' />
		<Route component={ExtraNotes} path='/owner/schedule/new/extra_notes' />
		<Route component={WalkReview} path='/owner/schedule/new/review' />
		<Route component={DogProfile} path="/Profile/Dog/:pet_id" />
		<Route component={Profile} path="/Profile/Owner" />
		<Route component={WalkerProfile} path="/Profile/Walker"/>
		<Route component={ViewSchedule} path='/walker/schedule' />
	</Switch>
);
