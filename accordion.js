
// getting the titles
var title1 = document.getElementById("title1");
var title2 = document.getElementById("title2");
var title3 = document.getElementById("title3");

// getting the contents
var content1 = document.getElementById("section-1");
var content2 = document.getElementById("section-2");
var content3 = document.getElementById("section-3");

// open or close
var is1Open = false;
var is2Open = false;
var is3Open = false;

// function to hide all

var divsToHide = document.getElementsByClassName("accordion-section");
function hideAll(divsToHide) {
  for (var i = 0; i < divsToHide.length; i++) {
    divsToHide[i].style.display = "none";
  }
  is1Open = false;
  is2Open = false;
  is3Open = false;
}

title1.addEventListener("click", function () {
  console.log("clicked");
  hideAll(divsToHide);
  if (!is1Open) {
    content1.style.display = "block";
    is1Open = true;
  } else {
    content1.style.display = "none";
    is1Open = false;
  }
});

title2.addEventListener("click", function () {
  console.log("clicked");
  hideAll(divsToHide);
  if (!is2Open) {
    content2.style.display = "block";
    is2Open = true;
  } else {
    content2.style.display = "none";
    is2Open = false;
  }
});

title3.addEventListener("click", function () {
  console.log("clicked");
  hideAll(divsToHide);
  if (!is3Open) {
    content3.style.display = "block";
    is3Open = true;
  } else {
    content3.style.display = "none";
    is3Open = false;
  }
});
