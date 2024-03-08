const mongoose = require("mongoose")

async function main() {
    try {
        await mongoose.connect(
            "mongodb+srv://juliolauwerss:WepdyPqgVkVr436F@cluster0.iyyib0r.mongodb.net/?retryWrites=true&w=majority"
        )

        console.log("Conectado ao banco")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main