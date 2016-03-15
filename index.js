'use strict';

var https = require('https');
require('dotenv').config();

/**
 * Retrieves a list of image search results from Google
 *
 *
 */
var search = 'panda';

var options = {
  host: 'www.googleapis.com',
  path: '/customsearch/v1?key=' + process.env.CSE_API_KEY + '&cx=' + process.env.CSE_ID + '&q=' + search
};

console.log('Options: ' + options.path);

var callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
};

https.request(options, callback).end();
