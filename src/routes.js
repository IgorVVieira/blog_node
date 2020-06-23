const express = require('express');
const routes = express.Router();
const ArticlesControllers = require('./controllers/ArticlesControlllers');
const CategoriesControllers = require('./controllers/CategoriesController');

routes.get('/', (req, res) => {
    return res.render('index');
});

module.exports = routes;