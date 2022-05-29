setInterval(function(){
	let skipButton = document.getElementsByClassName("ytp-ad-skip-button ytp-button");
	if (skipButton != undefined & skipButton.length > 0) {
		skipButton[0].click();
	}
}, 1000)