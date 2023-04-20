'use strict'

let biberImg = document.querySelector(".boxes .sol .biber")
let biberIcon = document.querySelector(".boxes .sag .biberIcon")
let meatImg = document.querySelector(".boxes .sol .et")
let meatIcon = document.querySelector(".boxes .sag .etIcon")
let cheeseImg = document.querySelector(".boxes .sol .pendir")
let cheeseIcon = document.querySelector(".boxes .sag .pendirIcon")
let seasoningImg = document.querySelector(".boxes .sol .edviyyat")
let seasoningIcon = document.querySelector(".boxes .sag .edviyyatIcon")


biberIcon.addEventListener("click",function () {
    biberImg.classList.toggle('active')
    
})
meatIcon.addEventListener("click",function () {
    meatImg.classList.toggle('active')
    
})
cheeseIcon.addEventListener("click",function () {
    cheeseImg.classList.toggle('active')
    
})
seasoningIcon.addEventListener("click",function () {
    seasoningImg.classList.toggle('active')
    
})