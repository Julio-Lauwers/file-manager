const mongoose = require("mongoose")

async function main() {
    try {
        await mongoose.connect(
            "mongodb+srv://juliolauwerss:filemanager123@cluster0.vsjrcis.mongodb.net/"
        )

        console.log("Conectado ao banco")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main