const express = require('express');
const authController = require('./controllers/authController');

const routes = express.Router();

routes.get('/', authController.signin);
routes.get('/signup', authController.signup);

module.exports = routes;
