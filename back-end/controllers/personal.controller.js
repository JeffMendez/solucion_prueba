const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../middleware/validate-request');

const personalSvc = require('../service/personal.service');

const getAll = (req, res, next) => {
    personalSvc.getPersonal()
        .then(vehiculos => res.json(vehiculos))
        .catch(next);
}

const create = (req, res, next) => {
    personalSvc.addPersonal(req.body)
        .then(() => res.json({ message: 'Personal creado'}))
        .catch(next);
}

const deletePn = (req, res, next) => {
    personalSvc.deletePersonal(req.params.id)
        .then(() => res.json({ message: 'Personal eliminado' }))
        .catch(next);
}

const update = (req, res, next) => {
    personalSvc.updatePersonal(req.params.id, req.body)
        .then(() => res.json({ message: 'Persona actualizada' }))
        .catch(next);
}

const createSchema = (req, res, next) => {
    const schema = Joi.object({
        dpi_persona: Joi.number().required(),
        nombres: Joi.string().required(),
        apellidos: Joi.string().required(),
        estado_civil: Joi.string().required(),
        correo: Joi.string().required(),
        telefono: Joi.number().required(),
    });
    validateRequest(req, next, schema);
}

const updateSchema = (req, res, next) => {
    const schema = Joi.object({
        dpi_persona: Joi.number().empty(),
        nombres: Joi.string().empty(),
        apellidos: Joi.string().empty(),
        estado_civil: Joi.string().empty(),
        correo: Joi.string().empty(),
        telefono: Joi.number().empty(),
    });
    validateRequest(req, next, schema);
}

router.get('/', getAll);
router.post('/', createSchema, create);
router.delete('/:id', deletePn)
router.put('/:id', updateSchema, update)

module.exports = router;