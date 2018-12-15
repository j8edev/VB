define([], function() {

var exports = {};

function callExternalAction(param)
{ 
  return 'Processed value from external js: ' + param; 
};

exports.callExternalAction = callExternalAction;

return exports;
});
