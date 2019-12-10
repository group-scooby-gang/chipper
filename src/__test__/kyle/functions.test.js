const ownerInfo = require('../../components/auth/register/ownerInfo/signUpOwnerInfo');
const petInfo = require('../../components/auth/register/petRegistrationInfo/petRegisterReview/petRegisterReview');
const walkerInfo = require('../../components/auth/register/walkerInfo/walkerInfo');
const walkerReview = require('../../components/auth/register/walkerInfo/walkerReview/walkerReview');

describe(`"ownerInfo" should return the correct input user value and should send a new owner registration to the server`, () => {
    test(`"ownerInfo.handleChange" function should return the same value as the user input`, () => {
        expect(ownerInfo.handleChange(e.target.value)).toBe(e.target.value);
    })

    test(`"ownerInfo.handleRegister" function should send a new registered owner to the server`, () => {
        //not really sure how I would go about doing this type of test
        expect(ownerInfo.handleRegister()).toBe();
    })
})

describe(`"petInfo" should send a new pet registration to the server`, () => {
    test(`"petInfo.handleRegisterPet" function should send a new registered pet to the server`, () => {
        //not really sure how I would go about doing this type of test
        expect(petInfo.handleRegisterPet()).toBe();
    })
})

describe(`"walkerInfo" should return the correct input user value`, () => {
    test(`"walkerInfo.handleChange" function should return the same value as the user input`, () => {
        expect(walkerInfo.handleChange(e.target.value)).toBe(e.target.value);
    })
})

describe(`"walkerReview" should send a new walker registration to the server`, () => {
    test(`"walkerReview.registerButton" function should send a new registered walker to the server`, () => {
        //not really sure how I would go about doing this type of test
        expect(walkerReview.registerButton()).toBe();
    })
})