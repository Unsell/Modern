var React = require("react");
var Scenerys = React.createClass({
  render: function() {
    return (

      <div className="Scenerys clearfix">
        <div className="scenery"><img src="images/Hydrangeas.jpg" alt className="cover" /></div>
        <div className="scenery"><img src="images/Lighthouse.jpg" alt className="cover" /></div>
        <div className="scenery"><img src="images/Tulips.jpg" alt className="cover" /></div>
      </div>
    );
  }
});

module.exports = Scenerys;