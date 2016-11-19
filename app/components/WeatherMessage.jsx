'use strict';

let React = require('react'),
    Weather = require('Weather');

let WeatherMessage = ({temp, location}) => {
    return (
      <div>
        <h3 className="text-center">It is {temp}&deg;F in {location}!!</h3>
      </div>
    );
  }

module.exports = WeatherMessage;
