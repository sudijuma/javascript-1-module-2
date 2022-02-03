const nav = document.querySelector("nav");
console.log(window);

function handleScroll() {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}

window.onscroll = handleScroll;

window.addEventListener("scroll", handleScroll);


const pepeToucher = document.querySelectorAll("p");
let thisPepe = "",
function changeTheStyle() {
    for (let i = 0; i < pepeToucher.length; i++){
        if(pepeToucher[i] = pepeToucher.length)
        pepeToucher.classList.add("pepeTime")
    } 
}
pepeToucher.onscroll = changeTheStyle;

/* stuff.forEach(function (item) {
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    stuffList.append(item);
}); */