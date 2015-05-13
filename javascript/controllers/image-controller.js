;(function(global) {

  /**
  * Controller responsible to manage
  * the logic that controls the flow of
  * view
  **/
  function ImageController() {
    this.data = [];
    this.pub = new EventEmitter();
  }

  /**
  * Runs the loop to execute the carousel
  * that changes the images sequence
  **/
  ImageController.run = function() {
    var current, upcoming;

    if(this.data.length > 0) {
      // getting the the main image and the upcoming new main image
      current = this.data[0], upcoming = this.data[1];

      setTimeout(function() {
        // moving the main image to the end
        this.moveToEnd();

        // letting the subscribers know
        this.pub.emmit('imageHasChanged', current, upcoming);
      }, 5000);
    }
  };

  /**
  * Get the first item on index 0 and move to the
  * end of the list.length-1
  **/
  ImageController.prototype.moveToEnd = function() {
    this.data.push(this.data.shift());
  };

  // global API
  global.ImageController = ImageController;

})(window.Instashow);
