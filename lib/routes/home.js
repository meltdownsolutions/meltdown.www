var config = require('../configuration')
  ;

exports.index = function(req, res){
  var model = {
    title: config.get('application:title'),
    author: 'bwsnare',
    user: 'Brett Snare'
  };
  res.render('index', model);
};
