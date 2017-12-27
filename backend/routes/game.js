'use strict'
import express from 'express';
import gameCtrl from '../controllers/game';

const api = express.Router()

api.get('/game', gameCtrl.getGames);
api.post('/game', gameCtrl.saveGame);
api.put('/game', gameCtrl.updateGame);
api.delete('/game/:gameId', gameCtrl.deleteGame);

module.exports = api;