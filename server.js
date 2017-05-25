'use strict';

const express = require('express');
const requestProxy = require('express-request-proxy');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./'));

app.get('/index', function(request, response) {
  console.log('is the server running?');
  response.sendFile('/index.html', { root: '.'});
});

app.listen(PORT, function() {
  console.log('is it?:' + PORT);
});
