'use strict'
import winston from 'winston';

const consoleOptions = {
    colorize: true,
    prettyPrint: true,
    level: 'debug',
    label: 'Game of Drones APIRestful'
}

let logger = new (winston.Logger)({
    transports: [ new winston.transports.Console(consoleOptions) ]
  });

export default logger;