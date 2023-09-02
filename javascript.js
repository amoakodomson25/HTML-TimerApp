function refreshPage() {
  location.reload();
}
var timeLeft;
var timeId;
const audio = new Audio("alarm1.mp3");
function stopSong() {
  audio.pause();
  audio.currentTime = 0;
}
function startTimer() {
  var inputMin = parseInt(document.getElementById("mins").value) * 60;
  var inputSec = parseInt(document.getElementById("secs").value);
  var sbutton = document.getElementById("startBtn");

  //time left in seconds
  timeLeft = inputMin + inputSec;

  timeId = setInterval(function () {
    timeLeft--;
    updateDisplay();

    sbutton.disabled = true;

    if (timeLeft === 0) {
      clearInterval(timeId);
      audio.play();
      audio.loop = true;
      sbutton.disabled = false;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timeId);

  var sbutton = document.getElementById("startBtn");
  sbutton.disabled = false;
  audio.pause();
  audio.currentTime = 0;

  var minutes = 0;
  var seconds = 0;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  document.getElementById("minsDis").innerHTML = minutes;
  document.getElementById("secsDisp").innerHTML = seconds;
}
function updateDisplay() {
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  document.getElementById("minsDis").innerHTML = minutes;
  document.getElementById("secsDisp").innerHTML = seconds;
}
