//metodo para llamar a uploads

const express = require('express');
const controller = require('../controller/uploads.controller')
const router = express.Router()



router.post(
    `/`,
    controller.upload,
    controller.uploadFile
)

module.exports = router