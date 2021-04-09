const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const mainPage = document.getElementById("main");
const mainStoryPage = document.getElementById("presi-main");
const navSlideWidth =  document.getElementById("navislide");

function openNav() {
    document.getElementById("navislide").style.width = "250px";
    const pageWidth = mainPage.getBoundingClientRect().width;

    //logic for mobile
    if (pageWidth < 450){
      navSlideWidth.style.width = "200px";
      document.getElementById("main").style.marginLeft = "0px";
      document.getElementById("presi-main").style.marginLeft = "0px";
    }
    else{
      navSlideWidth.style.width ="250px"
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("pres-main").style.marginLeft = "250px";
    }
  };


  function closeNav() {
    document.getElementById("navislide").style.width = "0";
    const pageWidth = mainPage.getBoundingClientRect().width;

    //logic for mobile
    if (pageWidth < 450){
      mainPage.style.marginLeft = "0px";
      mainStoryPage.style.marginLeft = "0px";
    } 
    else {
      mainPage.style.marginLeft = "200px";
      mainStoryPage.style.marginLeft = "200px";
    }
  };

  


