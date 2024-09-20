const express = require('express');
const router = express.Router();
const janine = require('../controller/Janine');  


router.get('/', janine.index);          
router.get('/about', janine.about);     
router.get('/contact', janine.contact); 
router.get('/portfolio', janine.portfolio); 
router.get('/services', janine.services); 

module.exports = router;
