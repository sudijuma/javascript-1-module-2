const formMessageContainer = document.querySelector("textarea");
const charsCount = document.querySelector(".character-count span");
const formSubmitBTN = document.querySelector("button[type='submit']");
console.log(formSubmitBTN)

formMessageContainer.onkeyup = function (event) {
    //console.log(event);
    //console.log("key: ", event.key);
    //console.log("value: ", event.target.value)
    const numberOfCharcEntered = event.target.value.length;
    console.log("numberOfCharcEntered;", numberOfCharcEntered)
    charsCount.innerHTML = numberOfCharcEntered;
    if(numberOfCharcEntered >= 5){
        formSubmitBTN.Disabled = numberOfCharcEntered <= 5;
    } else {
        console.log("dduee")
    }
};