const Sequelize = require("sequelize");
const cred = require("../cred.json")

// create connection : new Sequelize(database, username, password, {host, dialect})
const sequelize = new Sequelize(cred.DATABASE, cred.USERNAME, cred.PASSWORD, {
    host: cred.HOST,
    dialect: "mysql"
});

const Book = sequelize.define("Book", {
    name: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    }
})

sequelize.sync();

module.exports = Book;