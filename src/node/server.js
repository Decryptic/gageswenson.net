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
        contact:    'active',
    });
});

app.get('/apps', function(_, res) {
    res.render('apps.spy', {
        title:      "Gage's Apps",
        favicon:    'apps_favicon.ico',
        script:     'apps.js',
        stylesheet: 'apps.css',
        apps:       'active',
    });
});

app.get('/apps/privacy', function(_, res) {
    res.render('privacy.spy', {
        title:      'Privacy Policy',
        favicon:    'apps_favicon.ico',
        stylesheet: 'privacy.css',
        apps:       'active',
    });
});

app.get('/mandelbrot', function(_, res) {
    res.render('apps/mandelbrot.spy', {
        title:      'Mandelbrot Set',
        favicon:    'apps_favicon.ico',
        script:     'mandelbrot.js',
        apps:       'active',
    });
});

app.get('/brick_breaker', function(_, res) {
    res.render('apps/brick_breaker.spy', {
        title:      'Brick Breaker',
        favicon:    'apps_favicon.ico',
        apps:       'active',
    });
});

app.get('/date_countdown', function(_, res) {
    res.render('apps/date_countdown.spy', {
        title:      'Date Countdown',
        favicon:    'apps_favicon.ico',
        apps:       'active',
    });
});

app.engine('spy', sprightly);
app.set('views', html_d);
app.set('view engine', 'spy');
app.listen(port, console.log('running at port ' + port));
