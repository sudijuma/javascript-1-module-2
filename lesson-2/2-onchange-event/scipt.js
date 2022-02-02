//onchange event
//detect the selection of the select option input

const dropDown = document.querySelector("select");

const circlesContainer = document.querySelector(".circles-container");
//Select the circle class


//2 use onchange

dropDown.onchange = function (event) {
    //console.log("push the right number twice honey!")
    //console.log(event);
    console.log("using event.target.value", event.target.value);
    console.log("or using this.value", this.value);
    //circleContainer.innerHTML = this.value;
    circlesContainer.innerHTML = "";
    for (let i = 1; i <= event.target.value; i++) {
        console.log(i);
        circlesContainer.innerHTML += `<li>${i}</li>`;
    }
};