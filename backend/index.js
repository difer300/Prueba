'use strict'
import mongoose from 'mongoose';
import app from './app';
import config from './config';
import migrations from './migrations/seed';

mongoose.Promise = require('bluebird');

mongoose.connect(config.db, { useMongoClient: true }, (err, res) => {
    if(err){
        return console.log(`Error to connect to the data base: ${err}`);
    }

    console.log('Conexion established...');
    migrations.initialize();

    app.listen(config.port, () => {
        console.log(`API REST running in http://localhost:${config.port}`);
    });
});