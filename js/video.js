var video;

window.addEventListener("load", function() {
	video = document.querySelector('#player1');
	// console.log("Good job opening up the window");
	// console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function(){
	console.log("Play Video");
	video.play();
	// let vol = document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
 	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	// console.log("Slow Down Video");
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function(){
 	video.playbackRate *= 1.05;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Vintage");
 	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Normal");
 	video.classList.remove("oldSchool");
});


document.querySelector('#slider').addEventListener("click", function(){
	console.log(this.value);
	var slider = this.value;
	video.volume = slider / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#skip").addEventListener("click", function(){
	if (video.currentTime > 67.403333 - 15){
		console.log("Original location " + video.currentTime);
		console.log("Going back to the beginning");
		video.currentTime = 0;
		console.log("New location " + video.currentTime);
	}
	else{
		console.log("Original location " + video.currentTime);
		video.currentTime += 15;
		console.log("New location " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function(){
	var mute = video.muted;
	if (mute == false){
		document.querySelector("#mute").innerHTML = 'Unmute';
		video.muted = true;
	}
	else{
		document.querySelector("#mute").innerHTML = 'Mute';
		video.muted = false;
	}
	
});


var time = new Date().getHours();
if (time < 20) {
  document.getElementById("demo").innerHTML = "Good day";
}



