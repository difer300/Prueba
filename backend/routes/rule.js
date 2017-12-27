'use strict'
import express from 'express';
import gameCtrl from '../controllers/rule';

const api = express.Router()

api.get('/rule', gameCtrl.getRules);
api.post('/rule', gameCtrl.saveRule);
api.put('/rule', gameCtrl.updateRule);
api.delete('/rule/:ruleId', gameCtrl.deleteRule);

module.exports = api;