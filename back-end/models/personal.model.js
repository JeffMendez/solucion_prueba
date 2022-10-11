const { DataTypes } = require('sequelize');

const model = (sequelize) => {
    const attributes = {
        dpi_persona: { type: DataTypes.BIGINT, autoIncrement: false, primaryKey: true},
        nombres: { type: DataTypes.STRING, allowNull: false },
        apellidos: { type: DataTypes.STRING, allowNull: false },
        estado_civil: { type: DataTypes.STRING, allowNull: false },
        correo: { type: DataTypes.STRING, allowNull: false },
        telefono: { type: DataTypes.INTEGER, allowNull: false },
    };

    return sequelize.define('personal', attributes, { timestamps: false })
}


module.exports = model;