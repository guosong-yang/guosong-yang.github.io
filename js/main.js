function navClick() {
	var x = document.getElementById("navList");
	if (x.className === "nav") {
		x.className += " responsive";
	} else {
		x.className = "nav";
	}
}

$(function() {
	$('#navList li').not('.menu').click(function() {
		$('#navList li').removeClass('current');
		$(this).addClass('current');
	});
});
