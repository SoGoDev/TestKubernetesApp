const axios = require('axios');
const config = require('./config');

exports.groups = function() {
  return  axios.get(`${config.url}/votes`, {
    headers: {
      "x-api-key": "DEMO-API-KEY"
    }
  })
};

