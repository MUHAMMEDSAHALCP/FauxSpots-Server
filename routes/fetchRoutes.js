const express = require('express')
const router = express.Router()
const fetchController = require("../controller/fetchController")

router.get("/allTurf" , fetchController.getAllProducts)

module.exports = router 