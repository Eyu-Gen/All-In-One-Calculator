const menu = document.getElementById("menu");
const menuContainer = document.getElementById("menuContainer");
const menuBtn = document.getElementById("menuBtn");
const crossBtn = document.getElementById("crossBtn");

//Slide menu when menuBtn is clicked...
menuBtn.addEventListener("click", () => {
    menu.style.zIndex = "1";
    menu.style.backgroundColor = "rgba(28, 28, 28, 0.507)";
    menuContainer.style.transform = "translateX(0px)"; 
});

//Close menu when crossBtn is clicked...
crossBtn.addEventListener("click", () => {
    menu.style.backgroundColor = "transparent";
    menuContainer.style.transform = "translateX(500px)"; 
    menu.style.zIndex = "-1";
});