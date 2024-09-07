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

//Calculate when calculateBtn clicked...
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
            let rate = parseFloat(document.getElementById("rate").value)/100;
            let ratefor = document.getElementById("ratefor").value;
            let period;

            // Determine the rate for...
            if (ratefor === "yearly") {
                period = 1;
            } else if (ratefor === "quarterly") {
                period = 4;
            } else if (ratefor === "monthly") {
                period = 12;
            } else if (ratefor === "weekly") {
                period = 52;
            } else {
                period = 365;
            }

            // Adjust time based on the period
            time = time * period;

            // Calculate simple interest
            let interest = (Amount * rate * time);
            let totalAmount = interest + Amount;
            
            // Display the results
            let display = document.getElementById("display");
            display.innerHTML = `Total Amount = ${totalAmount.toFixed(2)} <br> Interest = ${interest.toFixed(2)}`;
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
    menuContainer.style.transform = "translateX(700px)";
    setTimeout(() => {
        menu.style.zIndex = "-1";
    }, 1000);
});