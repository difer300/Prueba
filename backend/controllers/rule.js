'use strict'
import Rule from '../models/rule';
import logger from '../utils/logger';

function getRules(req, res){
    logger.info(req.method, req.url);
    Rule.find({}, (err, rules) => {
        if(err) return res.status(500).send({ message: `Error to process the request: ${err}`});
        if(!rules) return res.status(404).send({ message: `There are not rules`});
        return res.status(200).send({rules});
    });
};

function saveRule(req, res){
    logger.info(req.method, req.url);
    var newRule = new Rule(req.body.rule);
    if(newRule && newRule.move && newRule.kills){
        newRule.save((err, ruleStored) => {
            if(err) res.status(500).send({ message: `Error to process the request: ${err}`});
            return res.status(200).send({rule: ruleStored});
        });
    }else{
        res.status(500).send("The data is required");
    }
};

function updateRule(req, res){
    logger.info(req.method, req.url);
    let updateRule = req.body.rule;
    if(updateRule && updateRule.id && updateRule.move && updateRule.kills){
        return Rule.findByIdAndUpdate(updateRule.id, updateRule, {runValidators: true}).exec().then(function() {
            res.sendStatus(200);
        });
    }else{
        res.status(500).send("The data is required");
    }
};

function deleteRule(req, res){
    logger.info(req.method, req.url);
    let ruleId = req.params.ruleId;
    if(ruleId){
        Rule.findByIdAndRemove(ruleId).exec().then(function() {
            res.sendStatus(200);
        }).catch(function (err){
            res.status(500).send(err);
        });
    }else{
        res.status(500).send("The data is required");
    }
};

module.exports = {
    getRules,
    saveRule,
    updateRule,
    deleteRule
};