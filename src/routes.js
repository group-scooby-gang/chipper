import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import App from './App';
import UserType from './components/auth/register/userType/signUpUserType';
import RegisterOwnerInfo from './components/auth/register/ownerInfo/signUpOwnerInfo'
import PetRegisterName from './components/auth/register/petRegistrationInfo/petRegisterName/petRegisterName';
import PetRegisterBreed from './components/auth/register/petRegistrationInfo/petRegisterBreed/petRegisterBreed';
import PetRegisterAge from './components/auth/register/petRegistrationInfo/petRegisterAge/petRegisterAge';
import PetRegisterReview from './components/auth/register/petRegistrationInfo/petRegisterReview/petRegisterReview';
import RegisterWalkerInfo from './components/auth/register/walkerInfo/walkerInfo';
import RegisterWalkerInfoStep2 from './components/auth/register/walkerInfo/walkerInfo2/walkerInfo2';
import RegisterWalkerAddress from './components/auth/register/walkerInfo/walkerAddress/walkerAddress';
import RegisterWalkerZip from './components/auth/register/walkerInfo/walkerZipCode/walkerZipCode';
import RegisterWalkerReview from './components/auth/register/walkerInfo/walkerReview/walkerReview';

export default (
    <Switch>
        <Route component={App} exact path='/' />
        <Route component={UserType} path='/register/usertype' />
        <Route component={RegisterOwnerInfo} path='/register/owner/info' />
        <Route component={PetRegisterName} path='/register/pet/name' />
        <Route component={PetRegisterBreed} path='/register/pet/breed' />
        <Route component={PetRegisterAge} path='/register/pet/age' />
        <Route component={PetRegisterReview} path='/register/pet/review' />
        <Route component={RegisterWalkerInfo} exact path='/register/walker/info' />
        <Route component={RegisterWalkerInfoStep2} path='/register/walker/info2' />
        <Route component={RegisterWalkerAddress} path='/register/walker/address' />
        <Route component={RegisterWalkerZip} path='/register/walker/zip' />
        <Route component={RegisterWalkerReview} path='/register/walker/review' />
    </Switch>
)