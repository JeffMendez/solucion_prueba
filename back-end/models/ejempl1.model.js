const { DataTypes } = require('sequelize');

const model = (sequelize) => {
    const attributes = {
        id_ejemplo: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: { type: DataTypes.STRING, allowNull: true },
    };

    return sequelize.define('usuario', attributes, { timestamps: false })
}


module.exports = model;