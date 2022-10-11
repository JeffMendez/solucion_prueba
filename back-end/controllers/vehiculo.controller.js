const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../middleware/validate-request');

const vehiculoSvc = require('../service/vehiculos.service');

const getAll = (req, res, next) => {
    vehiculoSvc.getVehiculos()
        .then(vehiculos => res.json(vehiculos))
        .catch(next);
}

const create = (req, res, next) => {
    vehiculoSvc.addVehiculo(req.body)
        .then(() => res.json({ message: 'Vehiculo creado'}))
        .catch(next);
}

const deleteVh = (req, res, next) => {
    vehiculoSvc.deleteVehiculo(req.params.id)
        .then(() => res.json({ message: 'Vehiculo eliminado' }))
        .catch(next);
}

const update = (req, res, next) => {
    vehiculoSvc.updateVehiculo(req.params.id, req.body)
        .then(() => res.json({ message: 'Vehiculo actualizado' }))
        .catch(next);
}

const createSchema = (req, res, next) => {
    const schema = Joi.object({
        placa: Joi.string().required(),
        capacidad: Joi.number().precision(4).required(),
        consumo_combustible: Joi.number().precision(4).required(),
        costos_depreciacion: Joi.number().precision(4).required(),
        pos_latitud: Joi.number().precision(10).required(),
        pos_longitud: Joi.number().precision(10).required(),
    });
    validateRequest(req, next, schema);
}

const updateSchema = (req, res, next) => {
    const schema = Joi.object({
        placa: Joi.string().empty(),
        capacidad: Joi.number().precision(4).empty(),
        consumo_combustible: Joi.number().precision(4).empty(),
        costos_depreciacion: Joi.number().precision(4).empty(),
        pos_latitud: Joi.number().precision(10).empty(),
        pos_longitud: Joi.number().precision(10).empty(),
    });
    validateRequest(req, next, schema);
}

router.get('/', getAll);
router.post('/', createSchema, create);
router.delete('/:id', deleteVh)
router.put('/:id', updateSchema, update)

module.exports = router;