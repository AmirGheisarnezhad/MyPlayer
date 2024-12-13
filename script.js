var songs = [
  {
    title: "Roadmap to Full-Stack Developer",
    artist: "Clever Programmer",
    src: "audio/song1.mp3",
    cover: "img/programmer.webp",
  },
  {
    title: "Sixteen Tons",
    artist: "Geoff Castellucci",
    src: "audio/song2.mp3",
    cover: "img/c3bcb3973c6c57f4edfa3e4c656fbb7e.jpg",
  },
  {
    title: "Lose Yourself",
    artist: "Eminem",
    src: "audio/song3.mp3",
    cover: "img/Yourself.jpg",
  },
];
var itemIndex = 0;
var audioPlayer = document.getElementById("audioPlayer");
var playButton = document.getElementById("playButton");

function render(song) {
  document.getElementById("musicCover").setAttribute("src", song.cover);
  document.getElementById("musicTitle").innerHTML = " Title : " + song.title;
  document.getElementById("musicArtist").innerHTML = " Artist : " + song.artist;
  document.getElementById("audioPlayer").src = song.src;
}
function nextAlbum() {
  itemIndex++;
  if (itemIndex > songs.length - 1) {
    itemIndex = 0;
  }
  render(songs[itemIndex]);
  if (audioPlayer.paused) {
    playButton.innerHTML = "Play";
  } else {
    playButton.innerHTML = "Stop";
  }
}
function prevAlbum() {
  itemIndex--;
  if (itemIndex < 0) {
    itemIndex = songs.length - 1;
  }
  render(songs[itemIndex]);
  if (audioPlayer.paused) {
    playButton.innerHTML = "Play";
  } else {
    playButton.innerHTML = "Stop";
  }
}

document.getElementById("next").addEventListener("click", nextAlbum);
document.getElementById("prev").addEventListener("click", prevAlbum);

playButton.addEventListener("click", function () {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.innerHTML = "Stop";
  } else {
    audioPlayer.pause();
    playButton.innerHTML = "Play";
  }
});

render(songs[itemIndex]);
