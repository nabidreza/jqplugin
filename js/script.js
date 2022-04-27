/////////////js//////////////

//wow
wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
})
    wow.init();

//////////JQUERY////////////

$(document).ready(function(){

	//animation
	$('body').buoyant({
		numberOfItems: 15,
		minRadius: 5,
		maxRadius: 25,
		elementClass: 'circles',
		colliding: true
	});
	


	//countme//	
	$("#num1").countMe({delay:10,time:700});
    $("#num2").countMe({delay:10,time:700});
	


	
    

});
