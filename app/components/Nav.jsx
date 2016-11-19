'use strict';

let React = require('react'),
    {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    let location = this.refs.search.value;
    let encodedLocation = encodeURIComponent(location);

    if(location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location='+encodedLocation;
    }
  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold', textDecoration: 'underline'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold', textDecoration: 'underline'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold', textDecoration: 'underline'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" ref="search" placeholder="Search weather by city" /></li>
              <li><button type="submit" className="button">Get Weather</button></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
