;(function(global) {
  'use strict'

  var buildURL = function(urlObj) {
    var url = urlObj.url.concat(urlObj.call)
      , params = urlObj.params
      , key

    for(key in params) {
      if(params.hasOwnProperty(key)) {
        url += !(/\?/g.test(url))
          ? "?" + key + "=" + params[key]
          : "&" + key + "=" + params[key]
      }
    }

    return url;
  }

  var ajax = function(url) {
    $.ajax({
      url: url,
      dataType: "json",
      success: function (data) {
        alert(JSON.stringify(data));
      }
    });
  }

  var get = function(url) {
    $.get(url, function(response) {
      console.log(response);
    });
  }

  /**
  * Services responsible for bringing raw
  * data from the webserver
  * @param {String} endpoint URL
  **/
  function ImageService(urlObj) {
    this.data = [];
    this._url = buildURL(urlObj);
    console.log(this._url);
  }

  /**
  * Get all images available
  **/
  ImageService.prototype.getAll = function() {
    ajax(this._url);
  }

  // global API
  global.ImageService = ImageService;

})(window.Instashow);
