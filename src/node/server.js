const express   = require('express');
const sprightly = require('sprightly');
const path      = require('path');

const port      = 3000;
const html_path = path.join(__dirname, '../html');

const app = express();

app.get('/', function (_, res) {
	res.render('index.spy', { title: "Gage's Website Yo" });
});

app.engine('spy', sprightly);
app.set('views', html_path);
app.set('view engine', 'spy');
app.listen(port, console.log('running at port' + port));
