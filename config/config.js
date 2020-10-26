require('dotenv').config();

module.exports = {
  development: {
    username: "bvnppwqk",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "bvnppwqk",
    host: "arjuna.db.elephantsql.com",
    dialect: "postgres",
  },
}
