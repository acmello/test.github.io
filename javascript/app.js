;(function(instashow) {
  var view = new instashow.ImageView();
  var controller = new instashow.ImageController();

  // setting up the service provider
  var service = new instashow.ImageService({
    url: 'http://instashow.jelasticlw.com.br/',
    params: {
      clientId: 123456,
      lastTimestamp: new Date().getTime(),
      maxSize: 2
    }
  });

  // fire up the app
  controller.init();
  view.init();

})(window.Instashow);
