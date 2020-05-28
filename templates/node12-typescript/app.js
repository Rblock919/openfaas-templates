const express = require('express');
const bodyParser = require('body-parser');

const middleware = require('./middleware');

const app = express();

app.use(bodyParser.json());
app.disable('x-powered-by');

app.post('/*', middleware);
app.get('/*', middleware);
app.patch('/*', middleware);
app.put('/*', middleware);
app.delete('/*', middleware);

module.exports = app;
