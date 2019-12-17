const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
    const {username, firstname, lastname, password, email, profileimg, phone, address, zip, city, state, apt} = req.body;
    const db = req.app.get("db")
    const checkUser = await db.checkUser([username])
    if(checkUser.length === 0){
        const salt = bcrypt.genSaltSync(10);
        const hashed = bcrypt.hashSync(password, salt);
        const isAdmin = false;
        const user =  await db.register([username, firstname, lastname, hashed, email, profileimg, phone, address, apt, city, state, zip, isAdmin])
        req.session.user = {
            username,
            firstname,
            lastname,
            email,
            phone,
            address,
            apt,
            city, 
            state,
            zip,
            isAdmin
        }
        res.status(200).json(user)
    } else {
        res.status(403).json("Username taken")
    }
}

const loginUser  = async (req, res) => {
    const {username, password} = req.body;
    const db = req.app.get("db")
    const checkUser = await db.checkUser([username])
    if(checkUser.length === 0){
        res.status(403).json("Invalid Login")
    }

    const isMatching = bcrypt.compare(password, checkUser[0].password)

    if(isMatching){
        req.session.user = {
            id: checkUser[0].user_id,
            username: checkUser[0].username,
            firstname: checkUser[0].firstname,
            lastname: checkUser[0].lastname,
            phone: checkUser[0].phone,
            address: checkUser[0].address,
            profileimg: checkUser[0].profileimg,
            isAdmin: checkUser[0].isAdmin,
            bio: checkUser[0].experience,
            isWalker: false
        }
        res.status(200).json(req.session.user)
        console.log(req.session.user)
    } else {
        res.status(403).json("Invalid Login")
    }
}

const isWalker = async (req, res) => {
    const db = req.app.get("db")
    const id = req.session.user.id;
    const check = await db.checkIfWalker(id);
    if(check.length > 0){
        req.session.user.isWalker = true
    } else {
        req.session.user.isWalker = false
    }

    // console.log(req.session.user);
    res.status(200).json(req.session.user);
}

const logoutUser = async(req, res) => {
    req.session.destroy()
    res.status(200).json("Logged Out")
}

module.exports = {
    registerUser,
    loginUser,
    isWalker,
    logoutUser
}