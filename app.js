const display = document.getElementById("display");
const simpleKeys = document.getElementsByClassName("simpleKeys"); 
const clearKeys = document.getElementsByClassName("clearKeys"); 
const calculateKey = document.getElementById("calculateKey");
const menu = document.getElementById("menu");
const menuContainer = document.getElementById("menuContainer");
const menuBtn = document.getElementById("menuBtn");
const crossBtn = document.getElementById("crossBtn");

//Keys display when clicked...
Array.from(simpleKeys).forEach(simpleKey => {
    simpleKey.addEventListener("click", () => {
        display.value += simpleKey.textContent;
        display.scrollLeft = display.scrollWidth;
    });
});

//Clear display when clearKeys are clicked...
Array.from(clearKeys).forEach(clearKey => {
    clearKey.addEventListener("click", () => {
        display.value = "";
    });
});

//Calculate and display output...
calculateKey.addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "ERROR!!";
    }
});

//Slide menu when menuBtn is clicked...
menuBtn.addEventListener("click", () => {
    menu.style.zIndex = "1";
    menu.style.backgroundColor = "rgba(28, 28, 28, 0.507)";
    menuContainer.style.transform = "translateX(0px)"; 
});

//Close menu when crossBtn is clicked...
crossBtn.addEventListener("click", () => {
    menuContainer.style.transform = "translateX(600px)"; 
    menu.style.backgroundColor = "transparent";
    setTimeout(() => {
        menu.style.zIndex = "-1";
    }, 1000);
});