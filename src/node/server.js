const port = 80;
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const html_path = __dirname + '/../html';
const img_path  = __dirname + '/../img';

router.get('/', function (req, res) {
	res.sendFile(path.join(html_path + '/index.html'));
});

app.use('/', router);
app.use('/img', express.static(img_path));
app.listen(process.env.port || port);

console.log('Running at Port ' + port);
