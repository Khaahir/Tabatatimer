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
let restbtn = document.querySelector(".choose-rest");
let workbtn = document.querySelector(".choose-work");
const popupw = document.querySelector(".popup--work ");
let popupr = document.querySelector(".popup--rest ");
let popupassetswork = document.querySelectorAll(".popup-assets button");
let popupassets = document.querySelectorAll(".popupr-assets button");

showturns.textContent = 8;
let popres;
let preparetime = 5;
let workTime = 10;
let workTime2 = 20;
let workTime3 = 30;
let workTime4 = 40;
let restTime = 10;
let restTime2 = 20;
let restTime3 = 30;
let restTime4 = 40;
let wTime = 20;
let rTime = 10;
let resettime1 = 20;
let resettime2 = 10;

isworking = true;
let rounds = 8;
let currentrounds = 0;
let timerforbeingrdy = 5;
let timerforworkornot = 0;
let soundplay = false;

function runtime() {
  if (currentrounds === rounds) {
    count1.classList.add("hidden");
    count2.classList.add("hidden");
    finnish.classList.remove("hidden");
    body.style.backgroundColor = "#d3d3d3";
    clearInterval(timerrun);
  }
  if (wTime === 3) {
    beep();
  }
  if (isworking) {
    body.style.backgroundColor = "green";
    displayrest.classList.add("hidden");
    displaywork.classList.remove("hidden");
    count1.classList.remove("hidden");
    count2.classList.add("hidden");
    count1.textContent = wTime;
    wTime--;
    console.log(wTime);
    if (wTime < 0) {
      rTime = resettime2;
      updateResettime();
      isworking = false;
      console.log(false);
      rTime;
      currentrounds++;
      turns.textContent = currentrounds;
    }
  } else if (!isworking) {
    body.style.backgroundColor = "red";
    displayrest.classList.remove("hidden");
    displaywork.classList.add("hidden");
    count1.classList.add("hidden");
    count2.classList.remove("hidden");
    count2.textContent = rTime;
    rTime--;

    if (rTime < 0) {
      wTime = resettime1;
      console.log(true);
      isworking = true;
      updateWorkTime();
      wTime;
    }
  }
  if (rTime === 2) {
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
  if (preparetime === 2) {
    beep();
  }
}

startbtn.addEventListener("click", function () {
  startbtn.disabled = true;
  lessturns.disabled = true;
  moreturns.disabled = true;

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
  popupr.classList.add("hidden");
  popupw.classList.add("hidden");
}

restbtn.addEventListener("click", function () {
  popupr.classList.toggle("hidden");
});

workbtn.addEventListener("click", function () {
  popupw.classList.toggle("hidden");
});

resetbtn.addEventListener("click", function () {
  wTime = 20;
  rTime = 10;
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
  body.style.backgroundColor = "#000000b1";
  startbtn.disabled = false;
  moreturns.disabled = false;
  lessturns.disabled = false;
});

function restpop() {
  for (let i = 0; i < popupassets.length; i++) {
    popupassets[0] = restTime;
    popupassets[1] = restTime2;
    popupassets[2] = restTime3;
    popupassets[3] = restTime4;
  }
}
popupassets[0].addEventListener("click", function () {
  count2.textContent = restTime;
  rTime = restTime;
  resettime2 = restTime;
  popupr.classList.toggle("hidden");
});

popupassets[1].addEventListener("click", function () {
  count2.textContent = restTime2;
  rTime = restTime2;
  resettime2 = restTime2;
  popupr.classList.toggle("hidden");
});

popupassets[2].addEventListener("click", function () {
  count2.textContent = restTime3;
  rTime = restTime3;
  resettime2 = restTime3;
  popupr.classList.toggle("hidden");
});

popupassets[3].addEventListener("click", function () {
  count2.textContent = restTime4;
  rTime = restTime4;
  resettime2 = restTime4;
  popupr.classList.toggle("hidden");
});

function workpop() {
  for (let i = 0; i < popupassetswork.length; i++) {
    popupassetswork[0] = workTime;
    popupassetswork[1] = workTime2;
    popupassetswork[2] = workTime3;
    popupassetswork[3] = workTime4;
  }
}

popupassetswork[0].addEventListener("click", function () {
  count1.textContent = workTime;
  wTime = workTime;
  resettime1 = workTime;
  popupw.classList.toggle("hidden");
});

popupassetswork[1].addEventListener("click", function () {
  count1.textContent = workTime2;
  wTime = workTime2;
  resettime1 = workTime2;
  popupw.classList.toggle("hidden");
});

popupassetswork[2].addEventListener("click", function () {
  count1.textContent = workTime3;
  wTime = workTime3;
  resettime1 = workTime3;
  popupw.classList.toggle("hidden");
});

popupassetswork[3].addEventListener("click", function () {
  count1.textContent = workTime4;
  wTime = workTime4;
  resettime1 = workTime4;
  popupw.classList.toggle("hidden");
});

const updateResettime = () => {};
const updateWorkTime = () => {};

hide();
restpop();
workpop();
console.log(count1);
console.log(count2);
