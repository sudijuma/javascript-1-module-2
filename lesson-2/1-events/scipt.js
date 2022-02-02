//Q1

//q2How to detect an event

//1. select the button with class. btn

 const button = document.querySelector(".btn");

//1. way 1 is to use a function expression😏 🤖 🤌
const handleClick = function handleClick(){
    console.log("i clicked the BTN");
};

// way 2. is to use something called addEventListener
button.addEventListener("click", handleClick);

//way 2 🙂 😍 👻
button.onclick = function(){
    console.log("i clicked the btn again")
}; 

//emoji 😏 🤖 🤌 🙂 😍 👻

//Q3 key press

// The onKeyDown event is triggered when the user presses a key.
// The onKeyUp event is triggered when the user releases a key.
// The onKeyPress event
// is triggered when the user presses & releases
// a key (onKeyDown followed by onKeyUp).
// not used anymore


/* const myFirstNameInput = document.querySelector("#firstName");

const handleKeyPress = function () {
    console.log("key is pressed");
    console.log(event.target.value);
}
myFirstNameInput.addEventListener("keydown", handleKeyPress); */


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

/* const allTheAnimals = document.querySelectorAll("li");
console.log(allTheAnimals);

for (let i = 0; i < allTheAnimals.length; i++) {
    allTheAnimals[i].addEventListener("mouseover", hoverAllTheAnimals);
};
function hoverAllTheAnimals(event) {
    console.log(event.target.dataset.animal);
}; */

var animalName = document.querySelectorAll("li");



var dog = function(){
    var name, breed;

}
firstDog = new dog;
firstDog.name = "dude";
firstDog.breed="fjert";

secondDog = new dog;
secondDog.name = "knepp";
secondDog.breed = "dobber";

console.log(firstDog.breed);
console.log(secondDog.name);

var ganja = function(){
    var name, type, rating, beginnerFriendly;
}
firstPlant = new ganja;
firstPlant.name = "northen lights😍";
firstPlant.type = "Indica";
firstPlant.rating = "Excellent";
firstPlant.beginnerFriendly = true;
console.dir(firstPlant);

secondPlant = new ganja;
secondPlant.name = "Power Plant👻"
secondPlant.type = "Hybrid";
secondPlant.rating= "Suberp";
secondPlant.beginnerFriendly = true;

console.dir(secondPlant);

var prata = function(snackaDå){
    console.log(snackaDå);
}

ganja.prototype.prata = prata;
secondPlant.prata("Heeej")
prata("fjert");
firstPlant.prata("fjfj")

const fyllaFormulär = document.querySelector("#firstName");

const närDuTrycker = function(){
    console.log("tryck igen");
    console.log(event.target.value);
};
fyllaFormulär.addEventListener("keydown", närDuTrycker)


const knappen = document.querySelector(".btn");
knappen.onclick = function (){
    console.log("du klickade mig kompis");
};

const fyll = document.querySelector(".container");
