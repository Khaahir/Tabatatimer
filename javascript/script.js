let count1 = document.querySelector(".countdown0");
let count2 = document.querySelector(".countdown1");
let turns = document.querySelector(".turns");
let displaywork = document.querySelector(".worktext");
let displayrest = document.querySelector(".resttext");
let finnish = document.querySelector(".finish");
let readyTime = document.querySelector(".ready");
let startbtn = document.querySelector(".start");
let resetbtn = document.querySelector(".reset");
let body = document.querySelector("body");
let showturns = document.querySelector(".turn");
let moreturns = document.querySelector(".more--turns");
let lessturns = document.querySelector(".less--turns");
let sound = document.querySelector(".sound");
showturns.textContent = 8;
let preparetime = 5;
let workTime = 20;
let restTime = 10;
isworking = true;
let rounds = 8;
let currentrounds = 0;
let timerforbeingrdy = 5;
let timerforworkornot = 0;
let soundplay = false;
// swicha mellan 1 o 2 för att timerns ska användas olika

function runtime() {
  if (currentrounds === rounds) {
    count1.classList.add("hidden");
    count2.classList.add("hidden");
    finnish.classList.remove("hidden");
    body.style.backgroundColor = "#d3d3d3";
    clearInterval(timerrun);
  }
  if (workTime === 3) {
    beep();
  }
  if (isworking) {
    body.style.backgroundColor = "green";
    displayrest.classList.add("hidden");
    displaywork.classList.remove("hidden");
    count1.classList.remove("hidden");
    count2.classList.add("hidden");
    count1.textContent = workTime;
    workTime--;
    if (workTime < 0) {
      isworking = false;
      console.log(false);
      restTime = 10;
      currentrounds++;
      turns.textContent = currentrounds;
    }
  } else if (!isworking) {
    body.style.backgroundColor = "red";
    displayrest.classList.remove("hidden");
    displaywork.classList.add("hidden");
    count1.classList.add("hidden");
    count2.classList.remove("hidden");
    count2.textContent = restTime;
    restTime--;
    if (restTime < 0) {
      console.log(true);
      isworking = true;
      workTime = 20;
    }
  }
  if (restTime === 2) {
    beep();
  }
}

function beReady() {
  if (preparetime >= 0) {
    readyTime.textContent = preparetime;
    preparetime--;
  } else {
    readyTime.style.display = "none";
  }
}

startbtn.addEventListener("click", function () {
  startbtn.disabled = true;

  timerforbeingrdy = setInterval(beReady, 1000);
  setTimeout(function () {
    timerforworkornot = setInterval(runtime, 1000);
  }, 6000);
});

moreturns.addEventListener("click", function () {
  if (rounds >= 1) {
    rounds++;
    showturns.textContent = rounds;
  }
});

lessturns.addEventListener("click", function () {
  if (rounds > 1) {
    rounds--;
    showturns.textContent = rounds;
  }
});

function beep() {
  if (!soundplay) {
    sound.play();
    // soundplay = true;
  }
  // setTimeout(function () {
  //   soundplay = false;
  // }, 8000);
}

function hide() {
  displaywork.classList.add("hidden");
  displayrest.classList.add("hidden");
  finnish.classList.add("hidden");
}
resetbtn.addEventListener("click", function () {
  // Reset timer values to their initial states
  workTime = 20;
  restTime = 10;
  isworking = true;
  showturns.textContent = rounds;
  currentrounds = 0;
  preparetime = 5;
  turns.textContent = currentrounds;
  clearInterval(timerforbeingrdy);
  clearInterval(timerforworkornot);
  displayrest.classList.add("hidden");
  displaywork.classList.add("hidden");
  count1.classList.add("hidden");
  count2.classList.add("hidden");
  finnish.classList.add("hidden");
  readyTime.style.display = "block";
  body.style.backgroundColor = "#d3d3d3";
  startbtn.disabled = false;
});

hide();
