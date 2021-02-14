const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');
// const joiSchemaValidation = require('../middleware/joiSchemaValidation');
// const productSchema = require('../apiSchema/productSchema');
const tokenValidation = require('../middleware/tokenValidation');

router.post('/', tokenValidation.validateToken, studentController.createStudent);

console.log('entering student file');
module.exports = router;