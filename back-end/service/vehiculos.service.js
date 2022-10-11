const db = require('../db/config');

const getVehiculos = async () => {
    return await db.vehiculo.findAll();
}

const addVehiculo = async (params) => {
    const vh = new db.vehiculo(params);
    await vh.save();
}

const updateVehiculo = async (id, params) => {
    const vh = await getVh(id);
    
    Object.assign(vh, params);
    await vh.save();
}

const deleteVehiculo = async(id) => {
    const vh = await getVh(id);
    await vh.destroy();
}

const getVh = async(id) => {
    const vh = await db.vehiculo.findByPk(id);
    if (!vh) throw 'Vehiculo no existe';
    return vh;
}

module.exports = {
    getVehiculos,
    addVehiculo,
    deleteVehiculo,
    updateVehiculo
};