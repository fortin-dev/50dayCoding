const clock = document.getElementById("displayTime");
const srt = document.getElementById("start");
const pause = document.getElementById("pause&resume");
let hr = 0;
let min = 59;
let sec = 50;

function clockFuntion() {
  console.log("works only 1 time");
  var interval = setInterval(() => {
    sec = sec + 1;
    if (sec >= 60) {
      min = min + 1;
      sec = 0;
    }
    if (min >= 60) {
      hr = hr + 1;
      min = 0;
    }
    clock.innerHTML = `${hr}:${min}:${sec}`;
  }, 1000);
}
srt.addEventListener("click", clockFuntion, { once: true });
pause.addEventListener("click", () => {
  clearInterval(interval);
});
