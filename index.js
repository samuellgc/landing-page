var express = require('express');
var app = express();
const path = require('path')
const data = require('./data.json')

app.set('view engine', 'ejs')

app.use(express.static("public"))

app.set('views', path.join(__dirname, 'views'))

app.get('/', function(req, res) {
    res.render('../views/template.ejs', {...data});
});

app.listen(8080, () => console.log('server is running'))