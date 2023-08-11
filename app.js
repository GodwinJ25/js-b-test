//const https = require('https');
var fs = require('fs');
const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

//
const host = "0.0.0.0"
const app = express();
const port = 3000;
const dateTime = require('./routes/date-time');
//

//Set views folder & Templating Engine
app.set('views',`${__dirname}/public/views`);
app.set('view engine','mustache');
app.engine('mustache',mustacheExpress());
//

//Set public folder
app.use(express.static(path.join(__dirname,'public')));

//Body parser middleware
app.use(bodyParser.json());
app.use( bodyParser.urlencoded({extended:false}));


//Https Server
//* To Create a Https server un comment the below line*/
/*
const options = {
  port:8000,
  key: fs.readFileSync(__dirname+'/certs/key.pem'),
  cert: fs.readFileSync(__dirname+'/certs/cert.pem'),
  passphrase: "******"
};
//https.createServer(options, app).listen(port);
*/

//Http Server
//*This line starts a http server with the specified port*/
//By Defaul this is http

//Enable Cors/Cross-Origin requests
app.use(cors());
//Disabling cache
app.set('etag', false)
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})

//Config routes
app.get('/js-buddy',async function(req,res){
  await res.render('index')
});

app.get('/utilities',async function(req,res){
  await res.render('utilities')
});

app.get('/cheat-sheet',async function(req,res){
  await res.render('cheat-sheet')
});

app.listen(port,host, () => {
  console.log(`Example app listening @ server ${host} on port ${port}`)
});

