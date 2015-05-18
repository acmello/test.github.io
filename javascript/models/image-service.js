;(function(global) {
  'use strict'

  function buildURL(urlObj) {
    var url = urlObj.url, key, params = urlObj.params;
    for(key in params) {
      if(params.hasOwnProperty(key)) {
        url += url.charAt(url.length-1) !== "?"
          ? "?" + key + "=" + params[key]
          : "&" + key + "=" + params[key]
      }
    }

    return url;
  }

  /**
  * Services responsible for bringing raw
  * data from the webserver
  * @param {String} endpoint URL
  **/
  function ImageService(urlObj) {
    this.data = [];
    this._url = buildURL(urlObj);
  }

  /**
  * Get all images available
  **/
  ImageService.prototype.getAll = function() {
    return ajax(url);
  }

  // global API
  global.ImageService = ImageService;

})(window.Instashow);
