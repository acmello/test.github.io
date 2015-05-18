;(function() {
	// it comes from the server
	var images = [
		'images/other2.jpg',
		'images/other3.jpg',
		'images/other4.jpg',
		'images/other5.jpg',
		'images/other6.jpg',
		'images/other7.jpg',
		'images/other8.jpg',
		'images/other7.jpg',
		'images/other8.jpg',
		'images/main.jpg',
	];

	var nodes = []
	var firstSection = document.getElementsByClassName('main-container')[0];
	var secondSection  = document.getElementsByClassName('side-container')[0];

	function template() {
		var fragment = document.createDocumentFragment()
		  , element = null;

		for(var i = 0, l = images.length; i < l; i++) {
			if(i == 0) {
				element = buildMainPicture(images[i]);
				firstSection.appendChild(element);
			} else {
				element = buildSmallPicture(images[i]);
				fragment.appendChild(element);
			}

			nodes.push(element);
		}

		secondSection.appendChild(fragment);
		console.log(secondSection.children);
	}

	function buildMainPicture(path, className) {
		var  col, figure, img, figureCaption, span;

		col = document.createElement('div');
		col.className = 'col-33-100';

		figure = document.createElement('figure');
		figure.className = 'media--large';

		img = document.createElement('img');
		img.className = (className || 'media__img fadeIn animated');
		img.setAttribute('src', path);

		figureCaption = document.createElement('figureCaption');
		figureCaption.className = 'media__body';

		span = document.createElement('span');
		span.className = 'username';
		span.textContent = '@Carlos_Rivin';

		figureCaption.appendChild(span);
		figure.appendChild(img);
		figure.appendChild(figureCaption);
		col.appendChild(figure);

		return col;
	}

	function buildSmallPicture(path, className) {
		var  col, figure, img;

		col = document.createElement('div');
		col.className = 'col-33-100';

		figure = document.createElement('figure');
		figure.className = 'media__large';

		img = document.createElement('img');
		img.className = (className || 'media__img-small fadeIn animated');
		img.setAttribute('src', path);

		figure.appendChild(img);
		col.appendChild(figure);

		return col;
	}

	(function poll() {
		setTimeout(function() {
			var el = firstSection.children[0];
			images.push(images.shift());

			setTimeout(function() {
				firstSection.removeChild(el);
				firstSection.appendChild(buildMainPicture(images[0]));
				secondSection.removeChild(secondSection.children[0]);
				secondSection.appendChild(buildSmallPicture(images[images.length-1]));
				poll();
			}, 1000);
		}, 3000);
	})();



	template();
})();
