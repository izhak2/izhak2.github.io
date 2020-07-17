
var express = require('express');
const bodyParser = require("body-parser");
var tex2max = require("tex2max");

const converter = new tex2max();
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000))
app.set('view engine', 'ejs');

app.get('/', function (req, res, next) {
    res.render('index', {'converter': converter});
});

app.post('/translate', function (req, res) {
    console.log(req.body);
    var latex_data = JSON.parse( req.body.latex_data );
    var maxima_data = converter.toMaxima(latex_data);
    console.log( latex_data, maxima_data );
    res.end( JSON.stringify(maxima_data));
});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
