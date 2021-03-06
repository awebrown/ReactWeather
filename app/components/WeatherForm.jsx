'use strict';

let React = require('react');

let WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    let location = this.refs.location.value;

    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input ref="location" type="search" placeholder="Search weather by city" />
          <button className="button hollow expanded">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
