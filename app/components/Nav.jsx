'use strict';

let React = require('react'),
    {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    alert('Not yet wired up');
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
              <li><input type="search" placeholder="Search weather" /></li>
              <li><button type="submit" className="button">Get Weather</button></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
