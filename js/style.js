// on s'occupe de faire apparaitre le pop up et de le faire disparaitre
document.getElementById("video-oppener").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "flex"
    document.querySelector("title").innerHTML = "AnimalsHelper | vidéo"

});
document.getElementById("video-closer").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none"
    document.querySelector("title").innerHTML = "AnimalsHelper | menu"

});

// changement de couleurs du background
const body = document.querySelector("body");
var photo2 = document.querySelector(".button2");
var photo1 = document.querySelector(".button1");
photo1.addEventListener('mouseenter', function() {
  body.style.background = "url(image/chienbg.jpg)"
  photo2.style.opacity = "0.3"
});

photo1.addEventListener('mouseleave', function(){
  body.style.background ="#E1D1DC"
  photo2.style.opacity = "1"

});

photo2.addEventListener('mouseenter', function() {
  body.style.background = "url(image/group.jpg)"
  photo1.style.opacity = "0.3"
});

photo2.addEventListener('mouseleave', function(){
  body.style.background ="#E1D1DC"
  photo1.style.opacity = "1"

});
