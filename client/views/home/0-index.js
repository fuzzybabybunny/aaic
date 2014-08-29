Template.index.rendered = function(){

	$(document).ready(function(){

		console.log('Document ready!')

		// gets the anchor tag
		var anchor = window.location.hash;
		// Code to link to anchor hashes within a page
		var scrollToHash = function  (hash, time) {
		  time = time || 500;

		  // If the link goes to the same (home) page
		  if (hash == '/') {
		    $('body').animate({
		      scrollTop: 0
		    }, time);  
		  }
		  else if ($(hash).length) {
		    $('body').animate({
		      scrollTop: $(hash).offset().top
		    }, time);
		  }
		  else {
		    $('body').animate({
		      scrollTop: 0
		    }, time);
		  }
		};

		scrollToHash(anchor);

		});



}