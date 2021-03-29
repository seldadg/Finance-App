var indexValue = 0;

function slideShow(){
  setTimeout(slideShow, 5000);
  var x;
  const screen = document.querySelectorAll("#screen");
  for(x = 0; x < screen.length; x++){
    screen[x].style.display = "none";
  }
  indexValue++;
  if(indexValue > screen.length){indexValue = 1}
  screen[indexValue -1].style.display = "block";
}
slideShow();