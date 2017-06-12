(function(){

	var hero_images = document.querySelectorAll('.hero figure');
	for (var i = 0; i < hero_images.length; i++){
		var el = hero_images[i];
		el.style.background = "url('" + el.getAttribute('data-bg') + "')";
	}


}());

(function(){

//ion-navicon-round
	var btn = document.getElementById('nav');
	var nav = document.querySelector('nav');
	var menuState = false;
 	btn.onclick=function(){

		if (menuState){
			btn.className = "non-active ion-navicon-round";
			nav.className = "non-active";
			menuState = false;
			return;
		}
		btn.className = "active ion-close-round";
		nav.className = "active";
		menuState = true;


	};


}());
