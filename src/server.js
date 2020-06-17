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

try {
    connection.authenticate();
} catch (error) {
    console.log(`Erro: ${error}`);
}

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});