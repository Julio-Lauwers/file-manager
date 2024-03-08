const express = require("express")
const router = express.Router()

//Controller
const { insertDocs } = require("../controllers/docsController")

//Middlewares

const { docsInsertValidation } = require("../middlewares/docsValidation")
const authGuard = require("../middlewares/authGuard")
const validate = require("../middlewares/handleValidation")
const { imageUpload } = require("../middlewares/imageUpload")

//Router

router.post(
    "/",
    authGuard,
    imageUpload.single("image"),
    docsInsertValidation(),
    validate,
    insertDocs,
);
module.exports = router