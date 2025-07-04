// let timer;
// let songlength = 0;
// let songindex = 0;
// let songplaying = false;
// let track = document.createElement("audio");\


let angle = 0;

function rotateImage() {
  const img = document.getElementById('albumArt');
  setInterval(() => {
    angle = (angle + 1) % 360;
    img.style.transform = `rotate(${angle}deg)`;
  }, 20); 
}


window.onload = rotateImage;

const audio = document.getElementById('myAudio');
const progressBar = document.getElementById('progressBar');