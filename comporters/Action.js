var React = require("react");
var Action = React.createClass({
  render: function() {
    return (

      <div className="action clearfix">
        <a href className="action-button button" />
        <a href className="button add-button">+</a>
      </div>
    );
  }
});

module.exports = Action;