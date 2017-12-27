import mongoose from 'mongoose';
import Rule from '../models/rule';
import rulesData from './rules.json';
import Promise from 'bluebird';

let rules = rulesData.rules;
var _initialize = function(){

    Rule.count({}).exec().then(function(count){
        if(!count){
            return Promise.map(rules, function(data) {
                return Rule.create({
                    move: data.move,
                    kills: data.kills
                });
            });
        }
    }).then(function() {
        console.log("The default data is successfully migrated.");
    }).catch(function(err){
        console.log(err);
    });
};

module.exports = {
    initialize : _initialize
};