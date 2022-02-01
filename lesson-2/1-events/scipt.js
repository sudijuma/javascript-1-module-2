//Q1


//q2How to detect an event

//1. select the button with class. btn

/* const button = document.querySelector(".btn");

//1. way 1 is to use a function expression😏 🤖 🤌
const handleClick = function handleClick(){
    console.log("i clicked the BTN");
};

// way 2. is to use something called addEventListener
button.addEventListener("click", handleClick);

//way 2 🙂 😍 👻
button.onclick = function(){
    console.log("i clicked the btn again")
}; */

//emoji 😏 🤖 🤌 🙂 😍 👻

//Q3 key press

// The onKeyDown event is triggered when the user presses a key.
// The onKeyUp event is triggered when the user releases a key.
// The onKeyPress event
// is triggered when the user presses & releases
// a key (onKeyDown followed by onKeyUp).
// not used anymore


const myFirstNameInput = document.querySelector("#firstName");

const handleKeyPress = function () {
    console.log("key is pressed");
    console.log(event.target.value);
}
myFirstNameInput.addEventListener("keydown", handleKeyPress);


//Q4 play with mouseover (to detect hovering)

const theHoverBtn = document.querySelector(".pet-btn");

const handleMouseOver = function () {
    theHoverBtn.classList.add("hover");
    console.log(event.target.dataset)
};
theHoverBtn.addEventListener("mouseover", handleMouseOver);

//Q5 play with mouseout

const handleMouseOut = function () {
    theHoverBtn.classList.remove("hover");
};
theHoverBtn.addEventListener("mouseout", handleMouseOut);

//Q6 select all the li
//on mouse over show the dataset of animal

const allTheAnimals = document.querySelectorAll("li");
console.log(allTheAnimals);

for (let i = 0; i < allTheAnimals.length; i++) {
    allTheAnimals[i].addEventListener("mouseover", hoverAllTheAnimals);
};
function hoverAllTheAnimals(event) {
    console.log(event.target.dataset.animal);
};