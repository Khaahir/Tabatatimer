let count1 = document.querySelector(".countdown0");
let count2 = document.querySelector(".countdown1");
let turns = document.querySelector(".turns");
let displaywork = document.querySelector(".worktext");
let displayrest = document.querySelector(".resttext");
const finnish = document.querySelector(".finish");
document.querySelector;
let readyTime = document.querySelector(".ready");
let startbtn = document.querySelector(".start");
let resetbtn = document.querySelector(".reset");
let body = document.querySelector("body");
finnish.style.display = beReadyTime = 5;
let workTime = 5;
let restTime = 5;
isworking = true;
let rounds = 8;
let currentrounds = 0;
let time0 = 5;
let time1 = 0;
// swicha mellan 1 o 2 för att timerns ska användas olika

function runtime() {
  if (isworking) {
    body.style.backgroundColor = "green";
    displayrest.style.display = "none";
    displaywork.style.display = "block";
    count1.classList.remove("hidden");
    count2.classList.add("hidden");
    count1.textContent = workTime;
    workTime--;
    if (workTime < 0) {
      isworking = false;
      console.log(false);
      restTime = 5;
      currentrounds++;
      turns.textContent = currentrounds;
    }
    if (currentrounds === rounds) {
      clearInterval(timerrun);
      count1.style.display = "none";
      count2.style.display = "none";
      count1.classList.add("hidden");
      count1.classList.add("hidden");
      finnish.style.display = "block";
      body.style.backgroundColor = "#d3d3d3";
    }
  } else if (!isworking) {
    body.style.backgroundColor = "red";
    displayrest.style.display = "block";
    displaywork.style.display = "none";
    count1.classList.add("hidden");
    count2.classList.remove("hidden");
    count2.textContent = restTime;
    restTime--;
    if (restTime < 0) {
      console.log(true);
      isworking = true;
      workTime = 5;
    }
  }
}

function beReady() {
  if (beReadyTime >= 0) {
    readyTime.textContent = beReadyTime;
    beReadyTime--;
  } else {
    readyTime.style.display = "none";
  }
}

startbtn.addEventListener("click", function () {
  time0 = setInterval(beReady, 1000);
  setTimeout(function () {
    timerrun = setInterval(runtime, 1000);
  }, 6000);
});

resetbtn.addEventListener("click", function () {
  let workTime = 5;
  let restTime = 5;
  isworking = true;
  let rounds = 8;
  let currentrounds = 0;
});
clearInterval();
