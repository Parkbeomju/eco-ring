require('dotenv').config();

module.exports = {
  development: {
    username: "beomju",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "data",
    host: "127.0.0.1",
    dialect: "postgres",
  },
}
