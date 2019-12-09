const addPet = async (req, res) => {
    const {name, breed, age, img} = req.body;
    const id  = req.session.user.id
    const db = req.app.get("db")
    await db.addPet(id, name, breed, age, img)
    res.status(200).json("Pet added")
}

const deletePet = async (req, res) => {
    const db = req.app.get("db")
    const pet_id = +req.params.pet_id //pet_id is a req params due to the fact you habe to be on the dogs profile in order to delete
    const deleted = await db.deletePet(pet_id)
    res.status(200).json("Pet removed")
}

const editPet = async (req, res) => {
    const db = req.app.get("db")
    const pet_id = +req.params.pet_id
    const {name, breed, age} = req.body;
    const edited = await db.editPet(name, breed, age, pet_id)
    res.status(200).json("Pet edited")
}

module.exports = {
    addPet,
    deletePet,
    editPet
}