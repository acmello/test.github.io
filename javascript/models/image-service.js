(function(global) {
  'use strict'

  /**
  * Services responsible for bringing raw
  * data from the webserver
  * @param {String} endpoint URL
  **/
  function ImageService(url) {
    this.data = [];
    this._url = url;
  }

  /**
  * Get all images available
  **/
  Service.prototype.getAll = function() {
    return ajax(url);
  }

  // global API
  global.ImageService = ImageService;

})(window.Instashow);
