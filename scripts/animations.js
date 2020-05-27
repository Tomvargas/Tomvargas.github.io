// Animations init

var spage;

function timer() {
  spage = setTimeout(show, 3000);
}

function show() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
}