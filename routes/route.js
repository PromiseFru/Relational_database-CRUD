const express = require('express');
const router = express.Router();
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
// create schema

router.get("/", (req, res) => {
    res.send("working...")
})

router.get("/books/", (req, res) => {
    Book.findAll().then(books => {
        res.json(books);
    })
})

module.exports = router;