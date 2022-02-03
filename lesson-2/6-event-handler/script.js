const myDivs = document.querySelectorAll(".container > div")
console.log(myDivs);

for (let i = 0; i < myDivs.length; i++) {
    console.log(myDivs[i].dataset.price);
    //let listItem = document.createElement("li");
    //listItem.innerHTML = `Number: ${[i]}`;

    myDivs[i].onclick = function(){
        console.log("The price is:", + event.target.dataset.price)
    }
}