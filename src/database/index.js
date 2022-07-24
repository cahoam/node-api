const Sequelize = require('sequelize');
const db = require('../config/database');
const Contact = require('../model/contact');

const conn = new Sequelize(db);

Contact.init(conn);

module.exports = conn;