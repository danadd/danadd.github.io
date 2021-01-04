const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

function openNav() {
    document.getElementById("navislide").style.width = "250px";


    const navSlideWidth =  document.getElementById("navislide");
    const navWidth = navSlideWidth.getBoundingClientRect().width;
    const mainPage = document.getElementById("main");
    const pageWidth = mainPage.getBoundingClientRect().width;

    //logic for mobile
    if (pageWidth < 450){
      navSlideWidth.style.width = "200px";
      document.getElementById("main").style.marginLeft = "0px";
    }
    else{
      navSlideWidth.style.width ="250px"
      document.getElementById("main").style.marginLeft = "250px";
    }
  };


  function closeNav() {
    const mainPage = document.getElementById("main");
    const pageWidth = mainPage.getBoundingClientRect().width;
    
    document.getElementById("navislide").style.width = "0";

    //logic for mobile
    if (pageWidth < 450){
      mainPage.style.marginLeft = "0px";
    } 
    else {
      mainPage.style.marginLeft = "200px";
    }
  };

  


