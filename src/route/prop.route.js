import express from 'express';
import PropertyController from '../controllers/property.controller';


// let express = require('express');
var router = express.Router();

// let index = require('../controllers/index');
/* GET home page. */
router.get('/', PropertyController.getProperties);
router.post('/', PropertyController.addNewProp);
router.get('/:id', PropertyController.getAProperty);
router.put('/:id', PropertyController.updateProp);
router.delete('/:id', PropertyController.deleteProp);

export default router;
