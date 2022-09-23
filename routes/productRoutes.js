const express = require('express')
const router = express.Router()
const productController = require("../controller/addProductCcontroller")
const { upload } = require("../middlewares/fileUpload")




router.post("/addturf", upload.fields([
    { name: "turf_images1", maxCount: 1 },
    { name: "turf_images2", maxCount: 1 },
    { name: "turf_images3", maxCount: 1 }
]), productController.addProduct)


module.exports = router   