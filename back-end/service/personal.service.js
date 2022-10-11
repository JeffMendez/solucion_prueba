const db = require('../db/config');

const getPersonal = async () => {
    return await db.personal.findAll();
}

const addPersonal = async (params) => {
    const ps = new db.personal(params);
    await ps.save();
}

const updatePersonal = async (id, params) => {
    const ps = await getPs(id);
    
    Object.assign(ps, params);
    await ps.save();
}

const deletePersonal = async(id) => {
    const ps = await getPs(id);
    await ps.destroy();
}

const getPs = async(id) => {
    const ps = await db.personal.findByPk(id);
    if (!ps) throw 'Personal no existe';
    return ps;
}

module.exports = {
    getPersonal,
    addPersonal,
    deletePersonal,
    updatePersonal
};