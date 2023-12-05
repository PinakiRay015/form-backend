const express = require('express');
const createData = require('../controllers/controller');
const myRouter = express.Router();

myRouter.post('/form' , createData)

module.exports = myRouter;