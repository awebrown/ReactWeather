'use strict';

let React = require('react');

let About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on React. I have built this for
        the Complete React Web App Developer Course. </p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
             &nbsp;- This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
             &nbsp;- I used Open Weather Map to search for weather data city name and
            Zip code.
        </li>
      </ul>
  </div>

  )
};

module.exports = About;
