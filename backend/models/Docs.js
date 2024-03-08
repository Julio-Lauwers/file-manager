const mongoose = require("mongoose")

const {Schema} = mongoose

const docsSchema = new Schema({

    docname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    document: {
        type: Buffer,
        required: true
    },
},
{ timestamps: true} //salva a data de criação do registro e data de atualização
);

const Docs = mongoose.model("Docs", docsSchema);

module.exports = {
    Docs,
    docsSchema,
}