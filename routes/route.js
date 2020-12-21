const express = require('express');
const Book = require("../models/books.js")
const router = express.Router();

router.get("/", (req, res) => {
    res.send("working...")
})

router.get("/books/", (req, res) => {
    Book.findAll().then(books => {
        res.json(books);
    })
})

module.exports = router;