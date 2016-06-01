var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=philadelphia">Philadelphia, PA</Link>
        </li>
        <li>
          <Link to="/?location=northsaltlake">North Salt Lake, UT</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
