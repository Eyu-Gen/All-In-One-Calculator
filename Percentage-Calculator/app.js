const chooseBtn = document.getElementById("chooseBtn");
const clearBtns = document.getElementsByClassName("clearBtn");
const menu = document.getElementById("menu");
const menuContainer = document.getElementById("menuContainer");
const menuBtn = document.getElementById("menuBtn");
const crossBtn = document.getElementById("crossBtn");
const chooseBtnSection = document.getElementById("chooseBtnSection");
const perOfNum = document.getElementById("perOfNum");
const whatPer = document.getElementById("whatPer");
const mainNum = document.getElementById("mainNum");
const containers = document.getElementsByClassName("requiredContainer");
const perOfNumBtn = document.getElementById("perOfNumBtn");
const whatPerBtn = document.getElementById("whatPerBtn");

//Display required block when chooseBtn is clicked...
chooseBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const operation = document.getElementById("operation").value;
    if (operation == "default") {
        display.innerHTML = "Choose!!";
        display.style.backgroundColor = "var(--primaryColor)";
    } else if (operation == "perOfNum") {
        resetContainer();
        perOfNum.style.display = "block";
    } else if (operation == "whatPer") {
        resetContainer();
        whatPer.style.display = "block";
    } else if  (operation == "mainNum") {
        resetContainer();
        mainNum.style.display = "block";
    }
});

//Find result form basenumber and percentage after clicking perOfNumBtn...
perOfNumBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const inputs = document.getElementsByClassName("perOfNumInputs");
    Array.from(inputs).forEach(input => {
        if (inputs.value == null) {
            display.innerHTML = "Error!!";
            display.style.backgroundColor = "var(--primaryColor)";
        }
    });
    const answer = Number(inputs[0].value) * Number(inputs[1].value/100);
    display.innerHTML = `Result = ${answer.toFixed(2)}`;
    display.style.backgroundColor = "var(--secondaryColor)";
});

//Find result form result and basenumber after clicking whatPerBtn...
whatPerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const inputs = document.getElementsByClassName("whatPerInputs");
    Array.from(inputs).forEach(input => {
        if (inputs.value == null) {
            display.innerHTML = "Error!!";
            display.style.backgroundColor = "var(--primaryColor)";
        }
    });
    const answer = Number(inputs[0].value) / Number(inputs[1].value) * 100;
    display.innerHTML = `Result = ${answer.toFixed(2)}%`;
    display.style.backgroundColor = "var(--secondaryColor)";
});

//Find result form result and percentage after clicking mainNumBtn...
mainNumBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const inputs = document.getElementsByClassName("mainInputs");
    Array.from(inputs).forEach(input => {
        if (inputs.value == null) {
            display.innerHTML = "Error!!";
            display.style.backgroundColor = "var(--primaryColor)";
        }
    });
    const answer = (Number(inputs[0].value) * 100) / Number(inputs[1].value);
    display.innerHTML = `Result = ${answer.toFixed(2)}`;
    display.style.backgroundColor = "var(--secondaryColor)";
});

//Clear display when clearKeys are clicked...
Array.from(clearBtns).forEach(clearBtn => {
    clearBtn.addEventListener("click", () => {
        display.style.backgroundColor = "var(--darkColor)";
        display.innerHTML = "";
    });
});

//Slide menu when menuBtn is clicked...
menuBtn.addEventListener("click", () => {
    menu.style.zIndex = "1";
    menu.style.backgroundColor = "rgba(28, 28, 28, 0.507)";
    menuContainer.style.transform = "translateX(0px)";
});

//Close menu when crossBtn is clicked...
crossBtn.addEventListener("click", () => {
    menu.style.backgroundColor = "transparent";
    menuContainer.style.transform = "translateX(700px)";
    setTimeout(() => {
        menu.style.zIndex = "-1";
    }, 1000);
});

//Reset Function;
function resetContainer() {
    Array.from(containers).forEach(container => {
        display.style.backgroundColor = "var(--darkColor)";
        display.innerHTML = "";
        container.style.display = "none";
    });
};