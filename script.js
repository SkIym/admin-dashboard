const bottomHeader  = document.getElementById("header-bottom");
const mainHeader = document.getElementById("header");
const mainContainer = document.getElementById("main");
const mainContent = document.getElementById("content");
const mobileMenu = document.getElementById('mobile-menu');
const dropBtn = document.getElementById('dropdown-button');
const dropContent = document.querySelector('.dropdown-content');

mainContainer.style.transition = "0.7s";


function minimizeHeader(e) {

  if (e.deltaY > 0) {
    scrollUp(false);
    mainContainer.style.gridTemplateRows = "85px 1fr";
    bottomHeader.style.transition = "0.1s";
    mobileMenu.style.transition = '0.1s';
  }
  else {
    scrollUp(true);
    mainContainer.style.gridTemplateRows = "170px 1fr";
    transitionfromHide();
  }
}

function scrollUp(action) {
  if (action) {
    bottomHeader.style.opacity = "1";
    mobileMenu.style.opacity = "1";
  } else {
    bottomHeader.style.opacity = "0";
    mobileMenu.style.opacity = "0";
  }
}

function transitionfromHide(action) {
  bottomHeader.style.transition = "0.6s";
  bottomHeader.style.transitionDelay = "0.3s";
  mobileMenu.style.transition = "0.6s";
  mobileMenu.style.transitionDelay = "0.3s";
}

function showDropDown() {
  console.log(dropContent)
  dropContent.classList.toggle('show');
}


mainContent.addEventListener("wheel", minimizeHeader);