const express = require('express');
const app = express();
const routes = require('./routes');
const connection = require('./database/connection');

const port = process.env.PORT || 3001;

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use(express.urlencoded({
    extended: true,
}));

app.use(routes);

connection.authenticate()
    .then(() => {})
    .catch((err) => {
        console.log(err);
    });

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});