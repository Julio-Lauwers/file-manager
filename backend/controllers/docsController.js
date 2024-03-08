const Docs = require("../models/Docs")
const User = require("../models/User")
const mongoose = require("mongoose")

// insert a document, with an user related to it
const insertDocs = async (req, res) => {
    const {title} = req.body
    const doc = req.file.filename

    const reqUser = req.user;

    const user = await User.findById(reqUser._id)

    //Create document
    const newDoc = await Docs.Create({

        
        description,
        document,
    })

    // If Document was created successfully, return data
    if(!newDoc) {

        res.status(422).json({
            errors: ["Houve um problema, por favor tente novamente mais tarde"]
        })
    }

    res.status(201).json(newDoc)
}

module.exports = {
    insertDocs
}