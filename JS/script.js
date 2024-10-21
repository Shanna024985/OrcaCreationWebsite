let homebuttonpc = document.getElementById("homepagepc");
let dropdownhomepagepc = document.getElementById("dropdownforhomepc");
let aboutusPC = document.getElementById("aboutuspc");
let dropdownforaboutusPC = document.getElementById("dropdownforaboutuspc");
let dropdowns = document.getElementsByClassName("dropdown-content");
let dropdownforservicePC = document.getElementById("dropdownforservicepc");
let servicePC = document.getElementById("servicepc");
let bounce = true;


servicePC.addEventListener("mouseover", ()=>{
  for (let i = 0; i < dropdowns.length; i++){
    if (dropdowns[i].style.display == "block"){
      dropdowns[i].style.display = "none";
      dropdownforservicePC.style.display = "block";
      dropdownforservicePC.style.top = "-30px";
      dropdownforservicePC.style.animation = "slide-bottom 0.5s ease forwards";
      dropdownforservicePC.style.zIndex = "-1";
    }
  }
  if (bounce){
    dropdownforservicePC.style.display = "block";
    dropdownforservicePC.style.top = "-30px";
    dropdownforservicePC.style.animation = "slide-bottom 0.5s ease forwards";
    dropdownforservicePC.style.zIndex = "-1";
    bounce = false
  }
})


aboutusPC.addEventListener("mouseover", ()=>{
  for (let i = 0; i < dropdowns.length; i++){
    if (dropdowns[i].style.display == "block"){
      dropdowns[i].style.display = "none";
      dropdownforaboutusPC.style.display = "block";
      dropdownforaboutusPC.style.top = "-30px";
      dropdownforaboutusPC.style.animation = "slide-bottom 0.5s ease forwards";
      dropdownforaboutusPC.style.zIndex = "-1";
    }
  }
  if (bounce){
    dropdownforaboutusPC.style.display = "block";
    dropdownforaboutusPC.style.top = "-30px";
    dropdownforaboutusPC.style.animation = "slide-bottom 0.5s ease forwards";
    dropdownforaboutusPC.style.zIndex = "-1";
    bounce = false
  }
})

homebuttonpc.addEventListener("mouseover", () => {
  for (let i = 0; i < dropdowns.length; i++){
    if (dropdowns[i].style.display == "block"){
      dropdowns[i].style.display = "none";
      dropdownhomepagepc.style.display = "block";
      dropdownhomepagepc.style.top = "-30px";
      dropdownhomepagepc.style.animation = "slide-bottom 0.5s ease forwards";
      dropdownhomepagepc.style.zIndex = "-1";
    }
  }
  if (bounce) {
    dropdownhomepagepc.style.display = "block";
    dropdownhomepagepc.style.top = "-30px";
    dropdownhomepagepc.style.animation = "slide-bottom 0.5s ease forwards";
    dropdownhomepagepc.style.zIndex = "-1";
    bounce = false;
  } 
});
var direction = "";
    var oldx = 0;
    var oldy = 0;
    mousemovemethod = function (e) {
    
 if (e.pageX > oldx && e.pageY == oldy) {
                direction="East";
            }
            else if (e.pageX == oldx && e.pageY > oldy) {
                direction="South";
            }
            else if (e.pageX == oldx && e.pageY < oldy) {
                direction="North";
            }
            else if (e.pageX < oldx && e.pageY == oldy) {
                direction="West";
            }
        
        
        oldx = e.pageX;
         oldy = e.pageY;
        
}

document.addEventListener('mousemove', mousemovemethod);

dropdownforservicePC.addEventListener("mouseover", () => {
  dropdownforservicePC.style.display = "block";
  dropdownforservicePC.style.top = "-30px";
  dropdownforservicePC.style.animation = "slide-bottom 0.5s ease forwards";
  dropdownforservicePC.style.zIndex = "-1";
  bounce = false;
});

dropdownhomepagepc.addEventListener("mouseover", () => {
  dropdownhomepagepc.style.display = "block";
  dropdownhomepagepc.style.top = "-30px";
  dropdownhomepagepc.style.animation = "slide-bottom 0.5s ease forwards";
  dropdownhomepagepc.style.zIndex = "-1";
  bounce = false;
});

dropdownforaboutusPC.addEventListener("mouseover",()=>{
  dropdownforaboutusPC.style.display = "block";
  dropdownforaboutusPC.style.top = "-30px";
  dropdownforaboutusPC.style.animation = "slide-bottom 0.5s ease forwards";
  dropdownforaboutusPC.style.zIndex = "-1";
  bounce = false;
})

dropdownforservicePC.addEventListener("mouseleave",()=>{
  if (!bounce && direction == "South"){
    dropdownforservicePC.style.animation = "slide-top 0.5s ease forwards";
    setTimeout(() => {
      dropdownforservicePC.style.display = "none";
      bounce = true;
    }, 500); // wait for the animation to finish
  }
})

dropdownforaboutusPC.addEventListener("mouseleave",()=>{
  if (!bounce && direction == "South"){
    dropdownforaboutusPC.style.animation = "slide-top 0.5s ease forwards";
    setTimeout(() => {
      dropdownforaboutusPC.style.display = "none";
      bounce = true;
    }, 500); // wait for the animation to finish
  }
})

dropdownhomepagepc.addEventListener("mouseleave", () => {
  if (!bounce && direction == "South"){
    dropdownhomepagepc.style.animation = "slide-top 0.5s ease forwards";
    setTimeout(() => {
      dropdownhomepagepc.style.display = "none";
      bounce = true;
    }, 500); // wait for the animation to finish
  }
});

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

