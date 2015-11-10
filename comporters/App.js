var React = require("react");
var Action = require("./Action.js");
var HaoDuo = require("./HaoDuo.js");
var Scenerys = require("./scenerys.js");

var App = React.createClass({
  render: function() {
    return (

      <div>
       		<Action />
       		<HaoDuo />
       		<Scenerys />
      </div>
    );
  }
});

module.exports = App;
