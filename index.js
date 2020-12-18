const express = require('express');
const Sequelize = require("sequelize");
const routes = require('./routes/route.js')
const cred = require("./cred.json")

const app = express();

// create connection : new Sequelize(database, username, password, {host, dialect})
const sequelize = new Sequelize(cred.DATABASE, cred.USERNAME, cred.PASSWORD, {
    host: cred.HOST,
    dialect: "mysql"
});

// test connection with the .authenticate() function
sequelize.authenticate()
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.error(err)
    })

app.use(routes);

app.listen(3000, console.log("server started"))