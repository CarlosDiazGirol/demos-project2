const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 3000;
const hbs = require('hbs');
const bodyParser = require('body-parser');
const staticRoutes = require('./routes/static.routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', (path.join(__dirname, 'views')));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', staticRoutes);

app.listen(PORT, () => {
    console.log(`connect port ${PORT}`);
});

