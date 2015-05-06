/* jshint devel:true */
(function() {
	$("section").click(function() {
		$(this).toggleClass('full');
		$(this).siblings().toggle();
		$(this).children().transition('fly down');
	});
})();
