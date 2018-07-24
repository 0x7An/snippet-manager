const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');

const app = express();

nunjucks.configure(path.resolve('app', 'views'), {
  autoescape: true,
  express: app,
});
app.set('view engine', 'njk');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen('3000');
