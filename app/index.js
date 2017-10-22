var React = require('react');
var ReactDOM  = require('react-dom');

var element = React.createElement(
  'h1',
  {className: 'yunmo'},
  '云陌，欢迎来到react的世界！'
 );

ReactDOM.render (
  element,
  document.getElementById('yunmo')
);