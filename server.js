// //Install express server
// const express = require('express');
// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist'));

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 7000);

// app.get('*', ( req, res ) => {
//     res.sendFile( __dirname + '/dist/index.html');
// });

const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((req, res) => {
  fs.readFile('index.htm', 'utf-8', (err, content) => {
    if (err) {
      console.log('We cannot open "index.htm" file.')
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
}).listen(httpPort, () => {
  console.log('Server listening on: http://localhost:%s', httpPort)
})