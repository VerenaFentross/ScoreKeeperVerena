console.log("Ulabula");

// definiere variabeln für die Punkteanzeige

let counterhome = document.querySelector("#pointshome");

let counteraway = document.querySelector("#pointsaway");

let scoreHome = 0;
let scoreAway = 0;

function plus1() {
  scoreHome += 1;
  counterhome.innerHTML = scoreHome;
}

function plus2() {
  scoreHome += 2;
  counterhome.innerHTML = scoreHome;
}
function plus3() {
  scoreHome += 3;
  counterhome.innerHTML = scoreHome;
}

// ====BUTTONSAWAY====

function plus1a() {
  scoreAway += 1;
  counteraway.innerHTML = scoreAway;
}

function plus2a() {
  scoreAway += 2;
  counteraway.innerHTML = scoreAway;
}
function plus3a() {
  scoreAway += 3;
  counteraway.innerHTML = scoreAway;
}

// ====RESET====

function resetpoints() {
  counterhome.innerHTML = "0";
  counteraway.innerHTML = "0";
}
