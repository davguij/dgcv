/* jshint devel:true */
(function() {
	$("section").click(function() {
		$(this).toggleClass('full');
		$(this).children('.toggleable').transition('fade');
	});
})();
