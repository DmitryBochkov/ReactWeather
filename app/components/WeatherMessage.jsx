var React = require('react');

var WeatherMessage = ({temp, location}) => {
  // var temp = props.temp;
  // var location = props.location;

  return (
    <div>
      <h3 className="text-center">It's {temp} in {location}</h3>
    </div>
  );
}

module.exports = WeatherMessage;
