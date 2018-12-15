define(["resources/importedjs"], function(importedjs) {
  'use strict';

  var PageModule = function PageModule() {};
  
  PageModule.prototype.callImportedJSFunction = function(param)
  {
    return importedjs.callExternalAction(param);
  }

  return PageModule;
});
