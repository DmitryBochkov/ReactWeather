var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are example locations to try out</p>
      <ol>
        <li>
          <Link to='/?location=Kyiv'>Kyiv, UA</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, BRA</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
