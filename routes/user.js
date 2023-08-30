var express = require('express');

var homeController = require('../controllers/homeController')
var postController = require('../controllers/postController')
var showController = require('../controllers/showController')
var deleteController = require('../controllers/deleteController')
var editController = require('../controllers/editController')
var updateController = require('../controllers/updateController')

var connection = require('../db');

var router = express.Router();

router.get('/',homeController);

router.post('/user', postController)

router.get('/show', showController)

router.get('/delete/:id', deleteController)

router.get('/edit/:id', editController)

router.post('/update/:id', updateController)

module.exports = router;