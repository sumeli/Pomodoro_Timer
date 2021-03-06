//variables and constants
const clk = document.querySelector(".clock");
const bell = document.querySelector("audio");
const mindiv = document.querySelector(".mins");
const secdiv = document.querySelector(".secs");
const startBtn = document.querySelector(".start");
var startTime = new Audio('timer1.mp3');
var dangerTime = new Audio('danger.flac');


localStorage.setItem("btn", "focus");

let initial, totalsecs, perc, paused, mins, seconds;

//Starting the timer
startBtn.addEventListener("click", () => {
  let btn = localStorage.getItem("btn");
  startTime.play();

  if (btn === "focus") {
    mins = +localStorage.getItem("focusTime") || 1;
  } else {
    mins = +localStorage.getItem("breakTime") || 1;
  }

  //Working of the clock
  seconds = mins * 60;
  totalsecs = mins * 60;
  setTimeout(decremenT(), 60);
  startBtn.style.transform = "scale(0)";
  paused = false;
});

//fucntion to decrement the time
function decremenT() {
  mindiv.textContent = Math.floor(seconds / 60);
  secdiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
  if (circle.classList.contains("danger")) {
    circle.classList.remove("danger");
  }

  if (seconds > 0) {
    perc = Math.ceil(((totalsecs - seconds) / totalsecs) * 100);
    setProgress(perc);
    seconds--;
    initial = window.setTimeout("decremenT()", 1000);
    if (seconds < 10) {
        dangerTime.play();
      circle.classList.add("danger");
    }
  } else {
    mins = 0;
    seconds = 0;
    bell.play();
    let btn = localStorage.getItem("btn");

    if (btn === "focus") {
      startBtn.innerHTML = "BREAK <i class='fas fa-hourglass-end'></i>";
      startBtn.classList.add("break");
      localStorage.setItem("btn", "break");
    } else {
      startBtn.classList.remove("break");
      startBtn.textContent = "START <i class='fas fa-hourglass-start'></i>";
      localStorage.setItem("btn", "focus");
    }
    startBtn.style.transform = "scale(1)";
  }
}

