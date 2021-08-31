const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");
const pauseBtn = document.querySelector(".pause");

var pauseTime = new Audio('pause.mp3');
var resetTime = new Audio('reset.mp3');

focusTimeInput.value = localStorage.getItem("focusTime");
breakTimeInput.value = localStorage.getItem("breakTime");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("focusTime", focusTimeInput.value);
    localStorage.setItem("breakTime", breakTimeInput.value);
});

document.querySelector(".reset").addEventListener("click", () => {
    resetTime.play();
    startBtn.style.transform = "scale(1)";
    clearTimeout(initial);
    setProgress(0);
    mindiv.textContent = 0;
    secdiv.textContent = 0;
});

//When paused button is pressed, set to resume and vice versa
pauseBtn.addEventListener("click", () => {
    if (paused === undefined) {
        return;
    }
    if (paused) {
        pauseTime.play();
        paused = false;
        initial = setTimeout("decremenT()", 60);
        pauseBtn.innerHTML = "PAUSE <i class='fas fa-pause'></i>"
        pauseBtn.classList.remove("resume");
    } else {
        pauseTime.play();
        clearTimeout(initial);
        pauseBtn.innerHTML = " RESUME <i class='fas fa-play'></i>"
        // pauseBtn.setAttribute('href', '<i class="fas fa-play"></i>');
        pauseBtn.classList.add("resume");
        paused = true;
    }
});
