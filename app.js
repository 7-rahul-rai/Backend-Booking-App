var express = require('express');

var bodyParser = require('body-parser');
var port = 3000;

var users = require('./routes/user');

var app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use('/',users);

app.listen(port,()=>{
    console.log(`app is listening on ${port}`)
});