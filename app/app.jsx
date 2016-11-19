'use strict';

let React = require('react'),
    ReactDOM = require('react-dom'),
    //Destructuring syntax
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    Main = require('Main'),
    Weather = require('Weather'),
    About = require('About'),
    Examples = require('Examples');

//style!css! are chained loaders, look in webpack.config.js
require('style!css!foundation-sites/dist/foundation.min.css');
//using jquery to tie in foundation 
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);
