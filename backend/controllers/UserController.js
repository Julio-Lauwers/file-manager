const User = require("../models/User")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const mongoose = require("mongoose")

const jwtSecret = 'sldfjçlkdjsflçkjsdfçkjdkidfiw83i8'

//Gerenerate user token
const generateToken = (id) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: "7d",
    })
}

//Register user and sign in

const register = async (req, res) => {

    const { name, email, password } = req.body

    //check if user exists
    const user = await User.findOne({ email })

    if (user) {
        res.status(442).json({ errors: ["Por favor, utilize outro e-mail"] })
        return
    }

    //Generate password hash
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    //Creat User
    const newUser = await User.create({
        name,
        email,
        password: passwordHash
    })

    // I user was created successfult, return the token
    if (!newUser) {
        res.status(422).json({ erros: ["Houve um erro, por favor tente mais tarde."] })
        return
    }

    res.status(201).json({
        _id: newUser._id,
        token: generateToken(newUser._id)
    })
}

const login = async (req, res) => {
    console.log('Conteúdo completo do req.body:', req.body);
    console.log('Rota de login foi chamada');
    const { email, password } = req.body;
    console.log('Email recebido:', email)

    const user = await User.findOne({ email });

    if (!email) {
        console.log('Email não fornecido na requisição');
        res.status(422).json({ errors: ["E-mail é obrigatório!"] });
        return;
    }
    // Check if user exists
    if (!user) {
        console.log('Usuário não encontrado!');
        res.status(404).json({ errors: ["Usuário não encontrado!"] });
        return;
    }

    // Check if password matches
    if (!(await bcrypt.compare(password, user.password))) {
        console.log('Senha inválida!');
        res.status(422).json({ errors: ["Senha inválida!"] });
        return;
    }

    //Gerenerate user token
    res.status(201).json({
        _id: user._id,
        token: generateToken(user._id)
    })
}

// Get current logged in user]

const getCurrentUser = async (req, res) => {
    const user = req.user;

    res.status(200).json(user)
}

//Update an User

const update = async (req, res) => {
    const { name, password } = req.body

    let profileImage = null

    if (req.file) {
        profileImage = req.file.filename
    }

    const reqUser = req.user

    //converter a string que chega do usuario da quequisição para o tipo de objectId
    const user = await User.findById(new mongoose.Types.ObjectId(reqUser._id)).select("-password");

    if (name) {
        user.name = name;
    }

    if (password) {
        //Generate password hash
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)

        user.password = passwordHash
    }

    if (profileImage) {
        user.profileImage = profileImage
    }

    await user.save()

    res.status(200).json(user)

}

//Get user by id
const getUserById = async(req, res) => {

    const {id} = req.params

    try {
        const user = await User.findById( new mongoose.Types.ObjectId(id)).select("-password")

        //check if user exists
        if(!user) {
            res.status(404).json({errors: ["Usuario não encontrado"]})
        }
    
        res.status(200).json(user)
        
    } catch (error) {
        res.status(404).json({errors: ["Usuario não encontrado"]})
        return
    }
  

}

module.exports = {
    register,
    login,
    getCurrentUser,
    update,
    getUserById
}