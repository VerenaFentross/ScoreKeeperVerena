console.log("Ulabula");

// deklariere die Variabeln für die Punkteanzeige

let counterhome = document.querySelector("#pointshome");

let counteraway = document.querySelector("#pointsaway");

//Ich lege den Wert 0 als Ausgangswert der Anzeige fest.

let Home = 0;
let Away = 0;

// Ich ordne den Buttons Funktionen zu, die beim Klick ausgeführt werden sollen, und binde sie über das "onklick"-tag im html beim jeweiligen Button ein.

function plus1() {
  Home += 1;
  counterhome.innerHTML = Home;
}

function plus2() {
  Home += 2;
  counterhome.innerHTML = Home;
}
function plus3() {
  Home += 3;
  counterhome.innerHTML = Home;
}

// ====BUTTONSAWAY====

function plus1a() {
  Away += 1;
  counteraway.innerHTML = Away;
}

function plus2a() {
  Away += 2;
  counteraway.innerHTML = Away;
}
function plus3a() {
  Away += 3;
  counteraway.innerHTML = Away;
}

// ====RESET====

function resetpoints() {
  counterhome.innerHTML = "0";
  counteraway.innerHTML = "0";
}

//Ende des Skripts
