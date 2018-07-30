const express = require('express');
const authController = require('./controllers/authController');
const dashboardController = require('./controllers/dashboardController');
const categoryController = require('./controllers/categoryController');
const snippetController = require('./controllers/snippetController');

const authMidleware = require('./midlewares/auth');
const guestMidleware = require('./midlewares/guest');

const routes = express.Router();

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});

// Auth
routes.get('/', guestMidleware, authController.signin);
routes.get('/signup', guestMidleware, authController.signup);
routes.get('/signout', authController.signout);

routes.post('/register', authController.register);
routes.post('/authenticate', authController.authenticate);

// dashboard
routes.use('/app', authMidleware);
routes.get('/app/dashboard', dashboardController.index);

// Categories
routes.get('/app/categories/:id', categoryController.show);
routes.post('/app/categories/create', categoryController.store);

// Snippets
routes.get('/app/categories/:categoryId/snippets/:id', snippetController.show);
routes.post('/app/categories/:categoryId/snippets/create', snippetController.store);
routes.put('/app/categories/:categoryId/snippets/:id', snippetController.update);
routes.delete('/app/categories/:categoryId/snippets/:id', snippetController.destroy);

routes.use((req, res) => res.render('errors/index'));

routes.use((err, req, res, _next) => {
  res.status(err.status || 500);

  return res.render('errors/index', {
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
});

module.exports = routes;
