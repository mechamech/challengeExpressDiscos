$(document).ready(function() {
	let urlSub = window.location.href.split('/')[3];
	if (!urlSub) {
		$(".home").addClass("active");
	}

	else {	
		let className = '.'.concat(urlSub) 
		$(className).addClass("active");
	}
})