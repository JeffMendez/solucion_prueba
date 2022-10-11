const { DataTypes } = require('sequelize');

const model = (sequelize) => {
    const attributes = {
        placa: { type: DataTypes.STRING, autoIncrement: false, primaryKey: true},
        capacidad: { type: DataTypes.DECIMAL, allowNull: false },
        consumo_combustible: { type: DataTypes.DECIMAL, allowNull: false },
        costos_depreciacion: { type: DataTypes.DECIMAL, allowNull: false },
        pos_latitud: { type: DataTypes.DECIMAL, allowNull: false },
        pos_longitud: { type: DataTypes.DECIMAL, allowNull: false },
    };

    return sequelize.define('vehiculo', attributes, { timestamps: false })
}


module.exports = model;