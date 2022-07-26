const Sequelize = require('sequelize');
const db = require('../config/database');
const Contact = require('../model/Contact');

const conn = new Sequelize(db);

Contact.init(conn);

module.exports = conn;