'use strict'
import express from 'express';
import bodyParser from 'body-parser';
import game from './routes/game';
import rule from './routes/rule';
import cors from 'cors';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', game);
app.use('/api', rule);

module.exports = app;