'use strict';

let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f1d2fd73cace74ac0cd9448cfa0e2a42&units=imperial';

module.exports = {
  getTemp: function(location) {
    let encodedLocation = encodeURIComponent(location);
    // let requestUrl;
    // if(isNaN(location)) {
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    // } else {
    //   requestUrl = `${OPEN_WEATHER_MAP_URL}&zip=${encodedLocation},us`;
    // }

    return axios.get(requestUrl).then(function(res) {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res) {

      throw new Error(res.response.data.message);

    });
  }
}
