const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
    const {username, firstname, lastname, password, email, profileimg, phone, address} = req.body;
    const db = req.app.get("db")
    const checkUser = await db.checkUser(username)
    if(checkUser.length === 0){
        const salt = bcrypt.genSaltSync(10);
        const hashed = bcrypt.hashSync(salt, password);
        const user =  await db.register(username, firstname, lastname, hashed, email, profileimg, phone, address)
        req.session.user = {
            username,
            firstname,
            lastname,
            email,
            phone,
            address
        }
        res.status(200).json(user)
    } else {
        res.status(403).json("Username taken")
    }
}


module.exports = {
    registerUser
}