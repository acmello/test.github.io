;(function(global) {

  var sub = new EventEmitter();
  /**
  * View responsible to manage
  * the render flow available on the DOM
  **/
  function ImageView() {
    this.mainContainer = null;
    this.sideContainer = null;
    this.self = this;
 }

  /**
  * Creates a fullsize image to be displayed
  * as the main image
  * @param {Object} a image object
  **/
  var buildLargeImage = function(img) {
    return ['<img src="' + img.src + "'/>"].join("");
  }

  /**
  * Creates a small version of the image
  * @param {Object} a image object
  **/
  var buildSmallImage = function(img) {
    return ['<img src="' + img.src + "'/>"].join("");
  }

  /**
  * Append a element to specific container
  * @param {HTMLElement} container which you append the element
  * @param {HTMLElement} the element bo appended
  **/
  var append = function(container, el) {
    container.append(el);
  }

  /**
  * A listener which waits for the publish
  * and as the result execute whatever lays in the callback
  **/
  ImageView.prototype.subscribe = function() {
    // once the image list has changed its order, let me know
    function imageHasChanged(current, upcomming) {
      append(this.mainContainer, buildLargeImage(upcomming));
      append(this.sideContainer, buildSmallImage(current));
    }

    // once the data is ready, let me know
    function dataIsReady(data) {
      this.self.render(data);
    }

    // the actuall subscribe
    sub.on('imageHasChanged', imageHasChanged);
    sub.on('dataIsReady', dataIsReady);
  }

  /**
  * Render it to the DOM based on the data provided
  * @param {Object} images object
  **/
  ImageView.prototype.render = function(data) {
    var i = 0, l = data.length, images = null;
    for(; i < l; i++) {
      i == 0
        ? images.push(buildLargeImage(data))
        : images.push(buildSmallImage(data))
    }

    append(this.mainContainer, images[0].join(""));
    append(this.sideContainer, images.substr(1, images.length-1).join(""));
  }

  /**
  * Initialize the view and everything which comes with it
  **/
  ImageView.prototype.init = function() {
    this.mainContainer = $('.main-container');
    this.sideContainer = $('.side-container');

    this.subscribe();
    console.log("view is running...");
  }

  // global API
  global.ImageView = ImageView;

})(window.Instashow);
