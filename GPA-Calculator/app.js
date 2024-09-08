const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");
const menu = document.getElementById("menu");
const menuContainer = document.getElementById("menuContainer");
const menuBtn = document.getElementById("menuBtn");
const crossBtn = document.getElementById("crossBtn");
const addSubjectBtn = document.getElementById("addSubjectBtn");
const inputs = document.querySelectorAll('input');
const additionalSection = document.getElementById("additionalSection");


//Calculate when calculateBtn clicked...
if (inputs.length > 0) {
    calculateBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const credits = document.getElementsByClassName("credit");
        const gpas = document.getElementsByClassName("gpa");
        let validInputs = true;
        let totalGradePoint = 0;

        inputs.forEach(input => {
            if (input.value === "") {
                validInputs = false;
            }
        });

        if (validInputs) {
            const creditSum = calculateTotal(credits);
            console.log(creditSum);
            for (let i = 0; i < credits.length; i++) {
                totalGradePoint += (Number(credits[i].value) * Number(gpas[i].value));
            }
            console.log(totalGradePoint);

            const totalGPA = totalGradePoint / creditSum;
            display.innerHTML = `GPA = ${totalGPA.toFixed(2)}`;
        } else {
            display.innerHTML = "Error!!";
            display.style.backgroundColor = "var(--primaryColor)";
        }
    });
} else {
    display.innerHTML = "Error!!";
    display.style.backgroundColor = "var(--primaryColor)";
}

//Add new block to add subjects when addSubjectBtn clicked...
addSubjectBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let subjectBox = document.createElement("div");
    subjectBox.classList.add("inputSection");
    additionalSection.appendChild(subjectBox);

    // Subject Name Input
    let subjectName = document.createElement("input");
    subjectName.classList.add("subjectName");
    subjectName.setAttribute("type", "text");
    subjectName.setAttribute("placeholder", "Subject...");
    subjectBox.appendChild(subjectName);

    // Credit Input
    let credit = document.createElement("input");
    credit.classList.add("credit");
    credit.setAttribute("type", "number");
    credit.setAttribute("placeholder", "Credit...");
    subjectBox.appendChild(credit);

    // GPA Input
    let gpa = document.createElement("input");
    gpa.classList.add("gpa");
    gpa.setAttribute("type", "number");
    gpa.setAttribute("placeholder", "GPA...");
    gpa.setAttribute("step", "0.01"); // allows decimal values for GPA
    subjectBox.appendChild(gpa);
});



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

//Addition function...
function calculateTotal(operands) {
    let sum = 0;
    Array.from(operands).forEach(operand => {
        sum += Number(operand.value);
    });
    return sum;
}