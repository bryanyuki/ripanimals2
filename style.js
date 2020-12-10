document.getElementById("video").addEventListener("click", function() {
  document.querySelector(".popup").style.display ="flex"
});

document.getElementById("close").addEventListener("click", function() {
  document.querySelector(".popup").style.display ="none"
});


const body = document.querySelector("body");
var photo2 = document.querySelector(".photo2");
var photo1 = document.querySelector(".photo1")

photo1.addEventListener('mouseenter', function() {
  body.style.backgroundColor = "#DBB84C"
})

photo1.addEventListener('mouseleave', function(){
  body.style.backgroundColor ="#E1D1DC"
})

photo2.addEventListener('mouseenter', function() {
  body.style.backgroundColor = "#4CDBDB"
})

photo2.addEventListener('mouseleave', function(){
  body.style.backgroundColor ="#E1D1DC"
})
