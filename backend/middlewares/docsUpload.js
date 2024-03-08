const multer = require("multer")
const path = require("path")


//Destination to store docmunets
const docsStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = ""

        if(req.baseUrl.includes("users")) {
            folder = "users"
        } else if(req.baseUrl.includes("docs")) {
            folder = "docs"
        }

        cb(null, `uploads/${folder}/`)
    },

    filename: (req, file, cb) => {

        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const docsUpload = multer({
    storage: docsStorage,
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(png|jpeg|pdf)$/)) {

            return cb(new Error("Porfavor, envie apenas png, jpeg ou pdf!"))
        }

        cb(undefined, true)
    }
})

module.exports = {docsUpload}