const db = require('../db/config');

const getUsuarios = async () => {
    return await db.usuario.findAll();
}

const create = async (params) => {
    const user = new db.usuario(params);
    await user.save();
}

module.exports = {
    getUsuarios,
    create
};