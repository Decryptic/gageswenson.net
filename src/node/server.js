const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

const port = 3000;
const html_path = __dirname + '/../html';
// configured nginx to handle static content
//const img_path  = __dirname + '/../img';

router.get('/', function (req, res) {
	res.sendFile(path.join(html_path + '/index.html'));
});

app.use('/', router);
//app.use('/img', express.static(img_path));
app.listen(process.env.port || port);

console.log('Running at Port ' + port);
