$(document).ready(function(){
  $(window).scroll(function(){

    /*Droplet*/
	if ($(this).scrollTop() > 500) {
	    $("#shape1").css({ "position": "fixed", "top": "460px"});
	} else {
	    $("#shape1").css({ "position": "absolute", "top": "2500px" });
	}



  });
  //////////////////////
// Vertical Scroll Counter
//////////////////////




  $(window).scroll(function() {
    $("div#vert_counter").text("px:" +$(window).scrollTop());
});


});
