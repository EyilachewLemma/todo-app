const express = require('express')
const {getCollection} = require('../controllers/collection.js')
const router = express.Router()

router.get('/', getCollection)

module.exports = router