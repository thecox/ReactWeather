var React = require('react');

var About = () => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on React.</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li><a href="http://facebook.github.io/react">React</a> - JavaScript framework</li>
        <li><a href="http://openweathermap.org">Open Weather Map</a> - Weather API</li>
      </ul>
    </div>
  );
};

module.exports = About;
