window.addEventListener("deviceorientation", function(event) {
	var rose = document.querySelector("#rose")
	rose.style.transform = "rotate(" + event.alpha + "deg)"
}, true);