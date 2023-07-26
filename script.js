const bottomHeader  = document.getElementById("header-bottom");
const mainHeader = document.getElementById("header");
const mainContainer = document.getElementById("main");
const mainContent = document.getElementById("content");

mainContainer.style.transition = "0.7s";


function minimizeHeader(e) {

  console.log(e)
  if (e.deltaY > 0) {
    bottomHeader.style.opacity = "0";
    mainContainer.style.gridTemplateRows = "85px 1fr";
    bottomHeader.style.transition = "0.1s";
  }
  else {
    bottomHeader.style.opacity = "1";
    bottomHeader.style.transition = "0.6s";
    bottomHeader.style.transitionDelay = "0.3s";
    mainContainer.style.gridTemplateRows = "170px 1fr";
  }
  
}


mainContent.addEventListener("wheel", minimizeHeader);