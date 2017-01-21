/*jshint esversion: 6 */
const express = require('express'),
         app  = express(),
         port = 3000;

// require('./config/middleware.js')(app, express);

app.use(express.static(__dirname + '/../app'));
require('./config/routes.js')(app, express);

app.listen(port, () => {
  console.log('Server listening on port ' + port);
  console.log('Serving... ' + (__dirname + '/../app'))
});
