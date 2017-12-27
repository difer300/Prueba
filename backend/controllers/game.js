'use strict'
import Game from '../models/game';
import logger from '../utils/logger';

function getGames(req, res) {
    logger.info(req.method, req.url)
    Game.find({}, (err, games) => {
        if(err) return res.status(500).send({ message: `Error to process the request ${err}`});
        if(!games) return res.status(404).send({ message: `There are no games`});
        res.status(200).send({games});
    })
};

function saveGame(req, res) {
    logger.info(req.method, req.url)
    var newGame = new Game(req.body.game);
    if(newGame && newGame.player1 && newGame.player2){
        newGame.save((err, gameStored) => {
            if(err) res.status(500).send({ message: `Error to save in the data base ${err}`});
            res.status(200).send({ game: gameStored });
        })
    }else{
        res.status(500).send("The data is required");
    }
};

function updateGame(req, res){
    logger.info(req.method, req.url);
    let updateGame = req.body.game;
    if(updateGame && updateGame.player1 && updateGame.player2 && updateGame.winner){
        return Game.findByIdAndUpdate(updateGame.id, updateGame, {runValidators: true}).exec().then(function() {
            res.sendStatus(200);
        });
    }else{
        res.status(500).send("The data is required");
    }
};

function deleteGame(req, res){
    logger.info(req.method, req.url);
    let gameId = req.params.gameId;
    if(gameId){
        Game.findByIdAndRemove(gameId).exec().then(function() {
            res.sendStatus(200);
        }).catch(function (err){
            res.status(500).send(err);
        });
    }else{
        res.status(500).send("The data is required");
    }
};

module.exports = {
    getGames,
    saveGame,
    updateGame,
    deleteGame
};