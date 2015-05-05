/* jshint devel:true */

$(".designer").click(function() {
	$(this).children().transition('fly down');
	if ($(this).parent().hasClass("three column")) {
		$(this).parent().removeClass("three column").addClass("one column");		
	} else if ($(this).parent().hasClass("one column")) {
		$(this).parent().removeClass("one column").addClass("three column");
	}
});