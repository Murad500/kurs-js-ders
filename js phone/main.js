'use strict';

let sarj = document.querySelector(".telefon .ekran .sarj");

let adapter = document.querySelector(".adapter");

let btn1 = document.querySelector(".btn1");

btn1.addEventListener("click",function(){
    adapter.classList.add("active")
    setTimeout(() => {
        sarj.classList.add("active")
        adapter.classList.add("activ")
    }, 4000);
})


// let data = new Date()
// setTimeout(() => {
//     console.log(data);
// }, 1000);

// setInterval(() => {
//     console.log(data);
// }, 5000);