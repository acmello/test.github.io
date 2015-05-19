;(function(instashow) {
  var view = new instashow.ImageView();
  var controller = new instashow.ImageController();

  // setting up the service provider
  var service = new instashow.ImageService({
    url: 'http://instashow.jelasticlw.com.br/Instashow/app/mobile/',
    call: "getClientData",
    params: {
      clientId: 'PRINT',
      lastTimestamp: new Date().getTime(),
      maxSize: 2,
   }
  });

  // fire up the app
  controller.init();
  controller.getData(service);
  view.init();

})(window.Instashow);
