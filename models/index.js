const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};
const Data =  require('./data');


let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Data = Data;

Data.init(sequelize);

Data.associate(db);

db.sequelize = sequelize;

module.exports = db;
