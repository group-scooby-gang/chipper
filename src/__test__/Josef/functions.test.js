const petReducer = require("../../redux/petReducer")


describe(`"edit pet" type should be EDIT_PET`, () => {
    test(`"petReducer.editPet" type must equal EDIT_PET`, () => {
    expect(petReducer.editPet().type).toBe("EDIT_PET")
    })
    test(`"petReducer.petDetails" type must equal PET_DETAILS`, () => {
        expect(petReducer.petDetails().type).toBe("PET_DETAILS")
    })
    test(`"registerPet" type must be REGISTER_PET`, () => {
            expect(petReducer.registerPet().type).toBe("REGISTER_PET")
    })
    test(`"resetFields" type must be RESET_FIELDS`, () => {
            expect(petReducer.resetFields().type).toBe("RESET_FIELDS")
    })
    test(`"updateState" type must be UPDATE_STATE`, () => {
            expect(petReducer.updateState().type).toBe("UPDATE_STATE")
    })
})