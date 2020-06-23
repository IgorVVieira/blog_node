const Sequelize = require('sequelize');
const connection = require('../database/connection');
const Category = require('./Category');

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

Category.hasMany(Article); //Uma categoria tem muito artigos 
Article.belongsTo(Category); // Um artigo pertence a uma categoria

try {
    Article.sync({
        force: false,
    });
    console.log('Tabela criada');
} catch (error) {
    console.log(`Erro ao criar tabela: ${error}`);
}

module.exports = Article;