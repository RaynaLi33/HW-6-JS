var video = document.getElementById('player1');
video.autoplay = false;
video.loop = false;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	console.log("Auto play is set to false")
	console.log("Loop is set to false")
});

document.querySelector("#play").addEventListener("click", function() {

    video.play();
	console.log("Play Video");

	slider.addEventListener('input', function() {
		video.volume = video.value / 100;
	});

});
	


document.querySelector("#pause").addEventListener("click", function() {

	video.pause();
	console.log("Pause Video");

	slider.addEventListener('input', function() {
		video.volume = slider.value / 100;
	});
});


document.querySelector("#slower").addEventListener("click", function() {
	// Decrease the playback rate by 10%
	video.playbackRate = 0.9 * video.playbackRate;
	console.log('Slow down, Current speed:', video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	// Decrease the playback rate by 10%
	video.playbackRate *= 1/0.9;
	// Ensure the playback rate doesn't go below 0.1
	console.log('Speed up, Current speed :', video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	
	console.log('Current time:', video.currentTime);
});

video.addEventListener('ended', function(){
	// Reset the video to 0
	video.currentTime = 0;
	// And play again
  });


document.querySelector("#vintage").addEventListener("click", function() {

  	video.classList.add("oldSchool");

});

document.querySelector("#orig").addEventListener("click", function() {

	video.classList.remove("oldSchool");

});

document.addEventListener("DOMContentLoaded", function() {
	var muteBtn = document.getElementById("mute");

	
	muteBtn.addEventListener("click", function () {
		toggleMute();
	  });
	
	  function toggleMute() {
		if (video.muted) {
		  video.muted = false;
		  muteBtn.innerHTML = "Mute";
		} else {
		  video.muted = true;
		  muteBtn.innerHTML = "Unmute";
		}
	  }
});

var slider = document.getElementById('slider');
var volumeSpan = document.getElementById('volume');

function updateVolume() {
     var volumeValue = slider.value;
    volumeSpan.textContent = volumeValue +"%";
}


slider.addEventListener('input', updateVolume);
updateVolume();

slider.addEventListener('input', function() {
	video.volume = slider.value / 100;
});
        
