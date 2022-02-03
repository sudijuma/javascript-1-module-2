const nav = document.querySelector("nav");
console.log(window);

function handleScroll(){
    if(window.scrollY > 50){
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}

window.onscroll = handleScroll;

window.addEventListener("scroll", handleScroll);

/* stuff.forEach(function (item) {
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    stuffList.append(item);
}); */