var React = require('react');

var WeatherMessage = ({temp, location}) => {
  // var temp = props.temp;
  // var location = props.location;

  return (
    <div>
      <p>It's {temp} in {location}</p>
    </div>
  );
}

module.exports = WeatherMessage;
