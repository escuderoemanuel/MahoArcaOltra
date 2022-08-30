/* MAIN */
/* The Creature */
var btnAbrirCreature = document.getElementById("btn__creature"),
  overlay__creature = document.getElementById("overlay__creature"),
  popup__creature = document.getElementById("popup__creature"),
  btnCerrarCreature = document.getElementById("ico__close__creature");

btnAbrirCreature.addEventListener("click", function (e) {
  e.preventDefault();
  overlay__creature.classList.add("active");
  popup__creature.classList.add("active");
});

btnCerrarCreature.addEventListener("click", function (e) {
  e.preventDefault();
  overlay__creature.classList.remove("active");
  popup__creature.classList.remove("active");
});

/* Left at the Altar of Experimental Love */
var btnAbrirLeft = document.getElementById("btn__left"),
  overlay__left = document.getElementById("overlay__left"),
  popup__left = document.getElementById("popup__left"),
  btnCerrarLeft = document.getElementById("ico__close__left");

btnAbrirLeft.addEventListener("click", function (e) {
  e.preventDefault();
  overlay__left.classList.add("active");
  popup__left.classList.add("active");
});

btnCerrarLeft.addEventListener("click", function (e) {
  e.preventDefault();
  overlay__left.classList.remove("active");
  popup__left.classList.remove("active");
});

/* Gems */
var btnAbrirGems = document.getElementById("btn__gems"),
  overlay__gems = document.getElementById("overlay__gems"),
  popup__gems = document.getElementById("popup__gems"),
  btnCerrarGems = document.getElementById("ico__close__gems");

btnAbrirGems.addEventListener("click", function (e) {
  e.preventDefault();
  overlay__gems.classList.add("active");
  popup__gems.classList.add("active");
});

btnCerrarGems.addEventListener("click", function (e) {
  e.preventDefault();
  overlay__gems.classList.remove("active");
  popup__gems.classList.remove("active");
});

/* Lily */
var btnAbrirLily = document.getElementById("btn__lily"),
  overlay__lily = document.getElementById("overlay__lily"),
  popup__lily = document.getElementById("popup__lily"),
  btnCerrarLily = document.getElementById("ico__close__lily");

btnAbrirLily.addEventListener("click", function (e) {
  e.preventDefault();
  overlay__lily.classList.add("active");
  popup__lily.classList.add("active");
});

btnCerrarLily.addEventListener("click", function (e) {
  e.preventDefault();
  overlay__lily.classList.remove("active");
  popup__lily.classList.remove("active");
});

/* Holding */
var btnAbrirHolding = document.getElementById("btn__holding"),
  overlay__holding = document.getElementById("overlay__holding"),
  popup__holding = document.getElementById("popup__holding"),
  btnCerrarHolding = document.getElementById("ico__close__holding");

btnAbrirHolding.addEventListener("click", function (e) {
  e.preventDefault();
  overlay__holding.classList.add("active");
  popup__holding.classList.add("active");
});

btnCerrarHolding.addEventListener("click", function (e) {
  e.preventDefault();
  overlay__holding.classList.remove("active");
  popup__holding.classList.remove("active");
});
