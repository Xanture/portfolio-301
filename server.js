'use strict';

const express = require('express');
const requestProxy = require('express-request-proxy');
const pg = require('pg');
const app = express();

const PORT = process.env.PORT || 3000;
const conString = 'postgres://postgres:1234@localhost:5432/postgres';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));
app.use(express.static('./'));

app.get('/index', function(request, response) {
  console.log('is the server running?');
  response.sendFile('/index.html', { root: '.'});
});

app.listen(PORT, function() {
  console.log('is it?:' + PORT);
});
