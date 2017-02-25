var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Use this App to see the weather in your location</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/">React</a> - this was the JavaScript framework used;
        </li>
        <li>
          <a href="https://openweathermap.org">OpenWeatherMap</a> - I used OpenWeatherMap to serch for weather data by city name;
        </li>
        <li>
          <a href="https://github.com/DmitryBochkov/ReactWeather">Vist my GitHub repo</a> to see the code.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
