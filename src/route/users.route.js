import express from 'express';
import userController from '../controllers/user.controller';


// let express = require('express');
var router = express.Router();

// let index = require('../controllers/index');
/* GET home page. */
router.get('/', userController.getUsers);
router.post('/', userController.addNewUser);
router.get('/:id', userController.getAUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;

