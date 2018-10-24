//Install express server
var history = require('connect-history-api-fallback');
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(history());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));


app.get('/.*/', ( req, res ) => {
  res.sendFile( __dirname + '/dist/index.html');
});

// Start the app by listening on the default Heroku port
app.listen(port, () => {
  console.log('Server listening on: http://localhost:%s', port);
});
