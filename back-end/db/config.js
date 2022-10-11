const tedious = require('tedious');
const { Sequelize } = require('sequelize');

var db = {};

initialize();

async function initialize() {
    const dialect = 'mssql';
    const host = process.env.SERVER;
    const username = process.env.USER;
    const password = process.env.PASSWORD;

    console.log(host, username, password)

    const sequelize = new Sequelize(process.env.DB, username, password, { host, dialect });

    db.usuario = require('../models/ejempl1.model')(sequelize);
    db.vehiculo = require('../models/vehiculos.model')(sequelize);
    db.personal = require('../models/personal.model')(sequelize);

    await sequelize.sync({ alter: true });
}

// var sql = require("mssql");
// var config = {
//     user: 'sa',
//     password: '',
//     server: 'DESKTOP-I6RFIFP', 
//     database: 'ejempl1',
//     options: { 
//         trustServerCertificate: true,
//     } 
// };

module.exports = db;