/**
 * Created by Aadi on 5/14/2017.
 */
var express= require('../packages/node_modules/express/index');
var app= express();

var mongoose= require('../packages/node_modules/mongodb/index');
mongoose.connect('mongodb://localhost/portfolio');

var path = require('path');

// Define the port to run on
app.set('port', 3000);

// Listen for requests
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});

app.use(express.static(path.join(__dirname, '../public')));