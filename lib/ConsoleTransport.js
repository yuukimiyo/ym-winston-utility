"use strict";

const winston = require('winston');

module.exports = () => {
  return new winston.transports.Console({
    format: winston.format.combine(
      winston.format.timestamp({format: 'YYYY/MM/DD hh:mm:ss'}),
      winston.format.colorize(),
      winston.format.printf(({ level, message, timestamp }) => {
        return `[${timestamp}] ${level}: ${message}`;
      })
    ),
  })
}
