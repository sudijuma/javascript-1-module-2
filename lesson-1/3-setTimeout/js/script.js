// The setTimeout method is used to execute a
// function after a specified period of time.
setTimeout(function(){
console.log("buuuh")
}, 1000);

var loaded = document.querySelector(".loader");
setTimeout(function(){
    loaded.innerHTML = "finnished downloading, mother fu%&#!";
},4000);