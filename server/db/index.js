require('dotenv').config();
const connectionString = process.env.MYURI;
const pgp = require('pg-promise')();
// const db = {};
// db.conn = pgp(connectionString);

module.exports = pgp(connectionString);
