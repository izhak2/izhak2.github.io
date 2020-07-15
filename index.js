
var express = require('express');
var tex2max = require("tex2max")
const bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 5000))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

exports.index = function(res, req) {
    res.render('index', {tex2max: tex2max});
}

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
