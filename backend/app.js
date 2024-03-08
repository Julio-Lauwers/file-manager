const express = require("express")
const path = require("path")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// DB connection
const conn = require("./db/conn");

conn()

// CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000"}))

// Upload directory
app.use("/backend/uploads", express.static(path.join(__dirname, "/backend/uploads")))

//Routes

const routes = require("./routes/router")

app.use(routes)

app.listen(3000, function() {
    console.log("O servidor esta funcionando ")
})

