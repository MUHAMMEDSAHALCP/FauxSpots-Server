const db = require("./db/connection")
const express = require("express")
const app = express()
const accountRoutes = require("./routes/accountRoutes")
const productRoutes = require("./routes/productRoutes")
const cors = require("cors")
const morgan = require("morgan")
const colors = require('colors')
const bodyParser = require("body-parser");

// db connect

db()

// local host

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server starting ${port}`.america))


//json converter

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// call 

app.use("/account", accountRoutes)

app.use("/vendor", productRoutes)