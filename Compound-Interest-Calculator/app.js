const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");
const menu = document.getElementById("menu");
const menuContainer = document.getElementById("menuContainer");
const menuBtn = document.getElementById("menuBtn");
const crossBtn = document.getElementById("crossBtn");
const inputs = document.querySelectorAll('input[type="number"]');
let amount;
let interest;
let period;

//Keys display when clicked...
if (inputs.length > 0) {
    calculateBtn.addEventListener("click", (event) => {
        event.preventDefault();
        let validInputs = true;

        inputs.forEach(input => {
            if (input.value === "") {
                validInputs = false;
            }
        });

        if (validInputs) {
            let Amount = parseFloat(document.getElementById("investment").value);
            let time = parseFloat(document.getElementById("time").value);
            let rate = parseFloat(document.getElementById("rate").value) / 100;
            let compound = document.getElementById("compound").value;
            let period;

            // Determine the number of compounding periods per year
            if (compound === "yearly") {
                period = 1;
            } else if (compound === "quarterly") {
                period = 4;
            } else if (compound === "monthly") {
                period = 12;
            } else if (compound === "weekly") {
                period = 52;
            } else {
                period = 365;
            }

            // Calculate compound interest
            let amount = Amount * Math.pow((1 + rate / period), period * time);
            let interest = amount - Amount;

            // Display the results
            display.innerHTML = `Total Amount = ${amount.toFixed(2)} <br> Interest = ${interest.toFixed(2)}`;
            display.style.backgroundColor = "var(--secondaryColor)";
        } else {
            display.innerHTML = "Error!!";
            display.style.backgroundColor = "var(--primaryColor)";
        }
    });
} else {
    display.innerHTML = "Error!!";
    display.style.backgroundColor = "var(--primaryColor)";
}

//Clear display when clearKeys are clicked...
clearBtn.addEventListener("click", () => {
    display.style.backgroundColor = "var(--darkColor)";
    display.innerHTML = "";
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
    menuContainer.style.transform = "translateX(600px)";
    setTimeout(() => {
        menu.style.zIndex = "-1";
    }, 1000);
});