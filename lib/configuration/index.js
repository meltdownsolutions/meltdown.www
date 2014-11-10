var nconf = require('nconf');

function Config(){
  nconf.argv().env("_");
  var environment = nconf.get("NODE:ENV") || "development";
  console.log(environment);
  nconf.file(environment, "config/" + environment + ".json");
  nconf.file("default", "config/default.json");

  console.log(nconf.get('express:port'));
}

Config.prototype.get = function(key) {
  return nconf.get(key);
};

module.exports = new Config();
