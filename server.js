const express = require('express');
const nunjucks = require('nunjucks');
const data = require('./data');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'njk');

nunjucks.configure('views', path.join(__dirname, 'views'), {
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
    const { id } = req.params;

    if (id > data.length || isNaN(id)) {
        return res.status(404).send('página não encontrada');
    }

    const info = data[id - 1]; 

    return res.render('details', { info });
});

app.listen(5000, () => console.log('server is running!'));
