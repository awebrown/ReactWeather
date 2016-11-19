'use strict';

let React = require('react'),
    {Link} = require('react-router');

let Examples = (props) => {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Richmond'>Richmond, VA</Link>
          </li>
          <li>
            <Link to="/?location=Rio">Rio, Brazil</Link>
          </li>
        </ol>
      </div>
    )
  };

module.exports = Examples;
