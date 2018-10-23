//Install express server
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port

app.get('/.*/', ( req, res ) => {
  res.sendFile( __dirname + '/dist/index.html');
});

app.listen(port);
