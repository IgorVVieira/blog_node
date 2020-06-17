const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Article = connection.define('article', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

try {
    Article.sync({
        force: false,
    });
} catch (error) {
    console.log(`Erro ao criar tabela: ${error}`);
}

module.exports = Article;