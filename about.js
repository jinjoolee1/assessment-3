document.getElementById("duck").addEventListener("mouseover", mouseOver);
document.getElementById("duck").addEventListener("mousout", mouseOut);

function mouseOver() {
	document.getElementById("duck").style.color = "red";
  }
  
  function mouseOut() {
	document.getElementById("duck").style.color = "black";
  }