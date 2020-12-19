const Sequelize = require("sequelize");
const cred = require("./cred.json")

module.exports = () => {
    // create connection : new Sequelize(database, username, password, {host, dialect})
    const sequelize = new Sequelize(cred.DATABASE, cred.USERNAME, cred.PASSWORD, {
        host: cred.HOST,
        dialect: "mysql"
    });

    // test connection with the .authenticate() function
    sequelize.authenticate()
        .then(() => {
            console.log("database connected");
        })
        .catch((err) => {
            console.error(err)
        })
}