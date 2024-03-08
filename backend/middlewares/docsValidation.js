const {body} = require("express-validator")

const docsInsertValidation = () => {
    return[
    body("title")
        .not()
        .equals("undefined")
        .withMessage("O nome do documento é obrigatório")
        .isString()
        .withMessage("O título é obrigatório")
        .isLength({min: 2})
        .withMessage("O título precisa ter no mínimo 2 caracteres"),
    body("doc").custom((value, {req}) => {
        if(!req.file) {
            throw new Error("O documento é obrigatório")
        }
        return true
    })
    ]
}

module.exports = {
    docsInsertValidation
}