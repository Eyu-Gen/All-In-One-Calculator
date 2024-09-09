const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");
const menu = document.getElementById("menu");
const menuContainer = document.getElementById("menuContainer");
const menuBtn = document.getElementById("menuBtn");
const crossBtn = document.getElementById("crossBtn");
const addSubjectBtn = document.getElementById("addSubjectBtn");
const additionalSection = document.getElementById("additionalSection");


//Calculate when calculateBtn clicked...
calculateBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const inputs = document.querySelectorAll('input[type="number"]');
    if (inputs.length > 0) {
        const creditTheory = document.getElementsByClassName("creditTheory");
        const creditPractical = document.getElementsByClassName("creditPractical");
        const gpaTheory = document.getElementsByClassName("gpaTheory");
        const gpaPractical = document.getElementsByClassName("gpaPractical");
        let validInputs = true;

        inputs.forEach(input => {
            if (input.value === "") {
                validInputs = false;
            }
        });

        if (validInputs) {
            const theorySum = muntiply(creditTheory, gpaTheory);
            const praticalSum = muntiply(creditPractical, gpaPractical);
            const totalGradePoint = sum(theorySum, praticalSum);
            const totalCredit = sum(creditPractical, creditTheory);
            const totalGPA = totalGradePoint / totalCredit;
            
            display.innerHTML = `GPA = ${totalGPA.toFixed(2)}`;
            display.style.backgroundColor = "var(--secondaryColor)";
        } else {
            display.innerHTML = "Error!!";
            display.style.backgroundColor = "var(--primaryColor)";
        }
    } else {
    display.innerHTML = "Error!!";
    display.style.backgroundColor = "var(--primaryColor)";
}});

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

    // Credit theory Input
    let creditTheory = document.createElement("input");
    creditTheory.classList.add("creditTheory");
    creditTheory.setAttribute("type", "number");
    creditTheory.setAttribute("placeholder", "Credit...");
    subjectBox.appendChild(creditTheory);
    
    // Credit practical Input
    let creditPractical = document.createElement("input");
    creditPractical.classList.add("creditPractical");
    creditPractical.setAttribute("type", "number");
    creditPractical.setAttribute("placeholder", "Credit...");
    subjectBox.appendChild(creditPractical);

    // GPA theory Input
    let gpaTheory = document.createElement("input");
    gpaTheory.classList.add("gpaTheory");
    gpaTheory.setAttribute("type", "number");
    gpaTheory.setAttribute("placeholder", "GPA...");
    gpaTheory.setAttribute("step", "0.01"); 
    subjectBox.appendChild(gpaTheory);
   
    // GPA practical Input
    let gpaPractical = document.createElement("input");
    gpaPractical.classList.add("gpaPractical");
    gpaPractical.setAttribute("type", "number");
    gpaPractical.setAttribute("placeholder", "GPA...");
    gpaPractical.setAttribute("step", "0.01"); 
    subjectBox.appendChild(gpaPractical);
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

// Muntiply function...
function muntiply(operand1, operand2) {
    let total = 0;
    for(let i = 0; i < operand1.length; i++) {
        total += (Number(operand1[i].value) * Number(operand2[i].value));
    };
    return total;
};

//Sum function...
function sum(operand1, operand2) {
    let sum = 0;

    if (isNaN(operand1)) {
        for (let i = 0; i < operand1.length; i++) {
            sum += (Number(operand1[i].value) + Number(operand2[i].value));
        }
        return sum;
    } else {
        return (operand1 + operand2);
    }
};
