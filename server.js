/**
 * Created by Aadi on 5/15/2017.
 */
var express= require('express');
var bodyParser= require('body-parser');

var mongoose= require('mongoose');
mongoose.connect('mongodb://aadishlok:Shlok#117@ds111123.mlab.com:11123/portfolio');


var app= express();

console.log('DIR: '+__dirname);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/node_modules'));

var pf= require('./private/app');
pf(app);

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(new Date().toISOString() + " server started on port "+port);
});