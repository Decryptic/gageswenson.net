const express   = require('express');
const sprightly = require('sprightly');
const path      = require('path');

const port    = 3000;
const html_d  = path.join(__dirname, '../html');

const app = express();

app.get('/', function (_, res) {
	res.render('index.spy', {
        title:      "Gage's Website",
        favicon:    'index_favicon.ico',
        script:     'index.js',
        stylesheet: 'index.css',
        home:  'active',
    });
});

app.get('/blog', function (_, res) {
    res.render('blog.spy', {
        title:      "Gage's Blog",
        favicon:    'blog_favicon.ico',
        script:     'blog.js',
        stylesheet: 'blog.css',
        blog:  'active',
    });
});

app.get('/contact', function (_, res) {
    res.render('contact.spy', {
        title:      "Contact Gage",
        favicon:    'contact_favicon.ico',
        script:     'contact.js',
        stylesheet: 'contact.css',
        contact:  'active',
    });
});

app.engine('spy', sprightly);
app.set('views', html_d);
app.set('view engine', 'spy');
app.listen(port, console.log('running at port ' + port));
