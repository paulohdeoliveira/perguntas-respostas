const Sequelize = require("sequelize");
const conn = new Sequelize("perguntas", "root", "19c4A5b3E", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = conn;