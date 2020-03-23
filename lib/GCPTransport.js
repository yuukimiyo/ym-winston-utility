"use strict";

const winston = require('winston');
var { LoggingWinston } = require('@google-cloud/logging-winston');

module.exports = (_googleProjectId, _googleKeyFilename, _label={}, _level='info') => {
  return new LoggingWinston({
    level: _level,
    format: winston.format.json(),
    projectId: _googleProjectId,
    keyFilename: _googleKeyFilename,
    labels: _label
  })
}
