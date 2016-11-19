'use strict';

let React = require('react'),
    WeatherForm = require('WeatherForm'),
    WeatherMessage = require('WeatherMessage'),
    openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    let that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function({temp, location}) {
      that.setState({
        isLoading: false,
        temp: Math.round(temp),
        location: location
      });
    }, function(errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  render: function() {
    let {isLoading, temp, location} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching weather...</h3>
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location} />
      }
    }

    return (
      <div className="row">
        <h3 className="text-center">Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
