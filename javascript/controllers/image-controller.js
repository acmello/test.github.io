;(function(global) {

  var pub = new EventEmitter();

  /**
  * Controller responsible to manage
  * the logic that controls the flow of
  * view
  **/
  function ImageController() {
    this.data = [];
  }

  /**
  * Runs the loop to execute the carousel
  * that changes the images sequence
  **/
  //var run = function() {

  //};

  /**
  * Get the first item on index 0 and move to the
  * end of the list.length-1
  **/
  var moveToEnd = function() {
    this.data.push(this.data.shift());
  };

  ImageController.prototype.init = function() {
    var current, upcoming;

    if(this.data.length > 0) {
      // getting the the main image and the upcoming new main image
      current = this.data[0], upcoming = this.data[1];

      setTimeout(function() {
        // moving the main image to the end
        moveToEnd();

        // letting the subscribers know
        pub.emmit('imageHasChanged', current, upcoming);
      }, 5000);
    }
  };

  ImageController.prototype.getData = function(service) {
    service.getAll();
  };

  // global API
  global.ImageController = ImageController;

})(window.Instashow);
