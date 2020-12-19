require('../connection.js')();
const Sequelize = require("sequelize");

const Model = Sequelize.Model

class Book extends Model {}
Book.init({
    name: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    }
}, {
    Sequelize,
    modelName: "Book"
});

Sequelize.sync();
// create schema