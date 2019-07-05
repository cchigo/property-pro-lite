import express from 'expresss';
import UserController from '../controllers/property.controller';


let express = require('express');
var router = express.Router();

let index = require('../controllers/index');
/* GET home page. */
router.get('/', UserController.getUsers);
router.post('/', UserController.addNewProp);
router.get('/', UserController.getUsersById);
router.put('/:id', UserController.updateProp);
router.delete('/:id', UserController.deleteProp);

export default router;
