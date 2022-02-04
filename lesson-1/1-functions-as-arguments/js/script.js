// These are often called callbacks. It is very common
// to pass functions as arguments to other ***
// functions and have the receiving function execute them.
//IIE
(function doSomething() {
    console.log("perkele")
})();


(function doSomething() { console.log("sauna") })();

(function minMamma() {
    console.log("Birgitta")
}());

//Hositing

minPappa();

function minPappa(){
    console.log("Said")
};

doSomething();

function doSomething() {
    console.log("dude");
}

const minStoreBror = function(){
    console.log("Imam")
}
minStoreBror();



function logTheArgument(someFunction) {
    console.log(typeof someFunction);
}
logTheArgument("Sudi")
logTheArgument(2344);
const obj = {};
logTheArgument(obj);

const someArray = [];

logTheArgument(someArray);


function justSomeFunction() {
    console.log("hello");
}
logTheArgument(justSomeFunction);

const justAHappyFunction = function () {
    console.log("Hello Im a happy function1")
}
logTheArgument(justAHappyFunction);

const love = document.querySelector(".li-list")
const loveContainer = document.querySelector(".container")
const imCool = function (arg1, arg2){
    let thisList = document.createElement("li");
    thisList.innerHTML = `Sudi ${arg1} Shevin, Shvein ${arg2} Sudi`;
    love.append(thisList)
}
loveContainer.append(love);