const express = require('express');
const nunjucks = require('nunjucks');
const data = require('./data');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'njk');

nunjucks.configure('views', {
    express: app,
    autoescape: false,
    noCache: true
});

app.get('/', (req, res) => {
    return res.render('index', { items: data });
});

app.get('/about', (req, res) => {
    return res.render('about');
});

app.get('/recipes', (req, res) => {
    return res.render('recipes', { items: data });
});

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    return res.send(id);
});

app.listen(5000, () => console.log('server is running!'));
