const walkerReducer = require('../../redux/walkerReducer');

describe(`"walkerReducer" should be able to update the initial state of the reducer as well as preform different HTTP requests`, () => {
    test(`"walkerReducer.updateState" function should update the state of the reducer`, () => {
        expect(walkerReducer.updateState().type).toBe("UPDATE_STATE")
    })
    test(`"walkerReducer.registerWalker" funciton should register a new walker to the database`, () => {
        expect(walkerReducer.registerWalker().type).toBe("REGISTER_WALKER")
    })
    test(`"walkerReducer.getWalkerSchedule" function should return the schedule for that walker`, () => {
        expect(walkerReducer.getWalkerSchedule().type).toBe("GET_SCHEDULE")
    })
    test(`"walkerReducer.getWalkerInfo" function should return information about the walker`, () => {
        expect(walkerReducer.getWalkerInfo().type).toBe("GET_WALKER_INFO")
    })
    test(`"walkerReducer.updateWalker" function should update information about the walker`, () => {
        expect(walkerReducer.updateWalker().type).toBe("UPDATE_WALKER")
    })
})