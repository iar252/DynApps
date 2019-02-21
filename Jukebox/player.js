var songTitle
var songSlider 
var currentTime
var duration
var volumeSlider 
var nextSongTitle

var song;
var currentSong = 0;
window.onload = setUp()
// var isLoop = false;

function setUp(){
	songTitle = document.getElementById('songTitle');
	songSlider = document.getElementById('songSlider');
	currentTime = document.getElementById('currentTime');
	duration = document.getElementById('duration');
	volumeSlider = document.getElementById('volumeSlider');
	nextSongTitle = document.getElementById('nextSongTitle');

}

const Jukebox = {
  songs: ["Ariana Grande - thank u, next.mp3",
		"The Weeknd, Kendrick Lamar - Pray For Me.mp3",
		"Dua Lipa - New Rules.mp3",
		"Marshmello ft. Bastille - Happier.mp3",
		"The Weeknd, Kendrick Lamar - Pray For Me.mp3",
		"Ariana Grande - 7 rings.mp3",
		"Ariana Grande - no tears left to cry.mp3",
		"Post Malone, Swae Lee - Sunflower.mp3",
		"Drake - Nice For What.mp3",
		"The Weeknd - Call Out My Name.mp3"],

  	settingInterval: function(){
  		setInterval(this.updateSongSlider, 1000);
  	},

  convertTime: function(secs){
  	var min = Math.floor(secs/60);
	var sec = secs % 60;
	min = (min < 10) ? "0" + min : min;
	sec = (sec < 10) ? "0" + sec : sec;
	return (min + ":" + sec);
  },

  nextSong: function(){
  	song.pause();
  	currentSong = (currentSong + 1) % this.songs.length;
	this.playSong(currentSong);
  },

  preSong: function(){
  	song.pause();
	currentSong--;
	currentSong = (currentSong < 0) ? this.songs.length - 1 : currentSong;
	this.playSong(currentSong);
  },

  updateSongSlider: function(){
  	var time = Math.round(song.currentTime);
  	songSlider.value = time;
  	var temp = function(){
		var min = Math.floor(time/60);
		var sec = time % 60;
		min = (min < 10) ? "0" + min : min;
		sec = (sec <10) ? "0" + sec : sec; 
		return (min + ":" + sec);
	};
  	currentTime.textContent = temp();
  	if(song.ended){
  		this.nextSong();
  	}
  },

  adjustVolume: function(){
  	song.volume = volumeSlider.value;
  },

  showDuration: function(){
  	var dur = Math.floor(song.duration);
	songSlider.setAttribute("max", dur);
	var temp = function(){
		var min = Math.floor(dur/60);
		var sec = dur % 60;
		min = (min < 10) ? "0" + min : min;
		sec = (sec <10) ? "0" + sec : sec; 
		return (min + ":" + sec);
	};
	duration.textContent = temp();
  },

  playOrPause: function (img){
  	song.playbackRate = 1;
	if(song.paused){
		song.play();
		img.src = "img/pause.png";
	}
	else{
		song.pause();
		img.src = "img/play.png";
	}
  },

  seekSong: function(){
  	song.currentTime = songSlider.value;
  	currentTime.textContent = function(){
		var min = Math.floor(song.currentTime/60);
		var sec = song.currentTime % 60;
		min = (min < 10) ? "0" + min : min;
		sec = (sec <10) ? "0" + sec : sec; 
		return (min + ":" + sec);
	}
  },

  adjustVolume: function(){
  	song.volume = volumeSlider.value;
  },

  playSong: function(curr = 0){
  	this.settingInterval();
  	currentSong = curr;
  	if (song){
  		song.pause();
  	}
    song = new Audio("audio/" + this.songs[currentSong]);
    songTitle.textContent = (currentSong + 1) + ". " + this.songs[currentSong];
    nextSongTitle.innerHTML = "<b>Next Song: </b>" + this.songs[(currentSong + 1) % this.songs.length];
    song.playbackRate = 1;
    song.volume = volumeSlider.value;
    song.play();
	setTimeout(this.showDuration, 1000);
  },

  shuffleSongs: function(){
  	var rand = Math.floor(Math.random()*10);
  	this.playSong(rand);
  },

  // loopSongs: function(){
  // 	isLoop = !isLoop;
  // 	if(song.ended){
  // 		playSong(currentSong);
  // 	}
  // }
}
Jukebox.playSong();
