const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'public')));
const port = process.env.PORT || 7000;
app.listen(port);