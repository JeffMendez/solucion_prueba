const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../middleware/validate-request');

const usuarioServc = require('../service/ejempl1.service');

const getAll = (req, res, next) => {
    usuarioServc.getUsuarios()
        .then(users => res.json(users))
        .catch(next);
}

const create = (req, res, next) => {
    usuarioServc.create(req.body)
        .then(() => res.json({ message: 'Usuario creado'}))
        .catch(next);
}

const createSchema = (req, res, next) => {
    const schema = Joi.object({
        nombre: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

router.get('/', getAll);
router.post('/', createSchema, create);



module.exports = router;