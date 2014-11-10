var express = require('express')
  , config = require('../configuration')
  , consolidate = require('consolidate')
  , http = require('http')
  , util = require('util')
  , util_options = config.get('util_options')
  //, heartbeat = require('../routes/heartbeat')
  , routes = require('../routes')
  , notFound = require('../middleware/notFound')
  , meltdown = express()
  , bodyParser = require('body-parser')
  , logger = require("../logger")
  ;


meltdown.use(bodyParser.urlencoded({ extended: true }));
meltdown.use(bodyParser.json());
meltdown.engine('html', consolidate.handlebars);
meltdown.set('view engine', 'html');

meltdown.set('views', 'views');
meltdown.use(express.static('public'));
meltdown.use(express.static('public/components'));
meltdown.use('/bootstrap', express.
  static('public/components/bootstrap/docs/assets/css'));


console.log(config.get('express:port'));
meltdown.set('port', config.get('express:port'));
meltdown.get('/', routes.home.index);
meltdown.get('/heartbeat', routes.heartbeat.index);
meltdown.use(notFound.index);

(function(){
  http.createServer(meltdown)
    .listen(meltdown.get('port'), function(){
      logger.debug("server started on port: " + util.inspect(this.address(), util_options));
  });

})();

module.exports = meltdown;
