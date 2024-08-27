const button = document.querySelector(".hover-button");
const popup = document.querySelector(".popup");
const div = document.querySelector(".container-fluid");

button.addEventListener("mouseover", () => {
    popup.style.display = "flex"; // Show the popup on hover
    popup.classList.add("slide-bottom");
});

popup.addEventListener("mouseout", () => {
    popup.style.display = "none"; // Hide the popup when mouse leave
    popup.classList.remove("slide-bottom");
    // popup.classList.add("slide-top");
});

popup.addEventListener("mouseover", () => {
    popup.style.display = "flex"; 
    popup.classList.add("slide-bottom"); 
}); 

