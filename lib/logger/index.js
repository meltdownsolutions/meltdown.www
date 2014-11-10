var winston = require('winston')
 , config = require('../configuration');

function Logger(){

  return winston.loggers.add('meltdown.solutions', {
    console: {
      timestamp: config.get('logger:timestamp'),
      colorize: config.get('logger:colorize'),
      level: config.get('logger:level'),
      label: 'meltdown'
    }
  });
};

module.exports = new Logger();
