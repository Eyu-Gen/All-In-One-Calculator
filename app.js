const containers = document.getElementsByClassName("container");
Array.from(containers).forEach((container, index) => {
    container.addEventListener("click", () => {
        switch (index) {
            case 0:
                window.location.href = `Simple-Calculator/index.html`;
                break;
            case 1:
                window.location.href = `Compound-Interest-Calculator/index.html`;
                break;
            case 2:
                window.location.href = `Simple-Interest-Calculator/index.html`;
                break;
            case 3:
                window.location.href = `Percentage-Calculator/index.html`;
                break;
            case 4:
                window.location.href = `GPA-Calculator/index.html`;
                break;
            case 5:
                window.location.href = `Date-Calculator/index.html`;
                break;
            case 6:
                window.location.href = `Time-Calculator/index.html`;
                break;
            case 7:
                window.location.href = `Love-Calculator/index.html`;
                break;
            case 8:
                window.location.href = `Temperature-Calculator/index.html`;
                break;
            case 9:
                window.location.href = `Age-Calculator/index.html`;
                break;
            case 10:
                window.location.href = `Height-Calculator/index.html`;
                break;
            case 11:
                window.location.href = `Weight-Calculator/index.html`;
                break;
            default:
                console.log("Unknown container clicked");
        }
    });
});
