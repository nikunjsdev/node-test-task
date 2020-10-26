const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
require('./connection')
require('./seeders')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(3001, () => {
  console.log(`Welcome to node test application`);
});
