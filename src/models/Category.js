const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Category = connection.define('category', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

try {
    Category.sync({
        force: false,
    });
} catch (error) {
    console.log(`Erro ao criar tabela: ${error}`);
}

module.exports = Category;