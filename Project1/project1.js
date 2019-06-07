window.addEventListener("keydown", function(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if (!audio)
		return; // stop the execution if a wrong key is pressed
	audio.currentTime = 0; // initialiaze the time at 0
	audio.play();
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	key.classList.add('played');
	setTimeout(function() {key.classList.remove('played');}, 100);
});


