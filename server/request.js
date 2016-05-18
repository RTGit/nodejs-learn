var url = require('url');
var debug = require('debug')('server:request');

module.exports = function(req, res) {
  var urlParsed = url.parse(req.url, true);

  if(urlParsed.pathname == '/echo' && urlParsed.query.message) {
    res.setHeader('Cache-control', 'no-cache');
    res.end(urlParsed.query.message);
  } else {
    debug("Unknown URL");
    res.statusCode = 404;
    res.end("Page not found");

  }
}
