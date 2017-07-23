/**
 * Created by Aadi on 5/10/2017.
 */
var express= require('../packages/node_modules/express');
var app= express();

app.use('/static', express.static('test'))

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.get('/', function (req, res) {
    res.send("Yay !!")
})


app.listen(3000, function () {
    console.log("App listening on port 3000")
})
