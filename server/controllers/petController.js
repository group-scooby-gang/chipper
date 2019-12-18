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
    await db.deletePet(pet_id)
    res.status(200).json("Pet removed")
}


const editPet = async (req, res) => {
    const db = req.app.get("db")
    const pet_id = +req.params.pet_id
    const {name, breed, age, img} = req.body;
    await db.editPet(name, breed, age, img, pet_id)
    res.status(200).json("Pet edited")
}


const ownersPets = async (req, res) => {
    const db = req.app.get("db")
    const id = req.session.user.id
    const pets = await db.getOwnersPets(id)
    res.status(200).json(pets)
}


const petsWalks = async (req, res) => {
    const db = req.app.get("db")
    const pet_id = +req.params.pet_id
    const history = await db.petsWalkHistory(pet_id)
    res.status(200).json(history)
}

const petDetails = async (req, res) => {
    const db = req.app.get("db");
    const pet_id = +req.params.pet_id;
    const details = await db.petDetails(pet_id);
    res.status(200).json(details)
}

module.exports = {
    addPet,
    deletePet,
    editPet,
    ownersPets,
    petsWalks,
    petDetails
}