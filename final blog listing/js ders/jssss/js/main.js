'use strict'

// let dragItem = document.querySelectorAll("#dragArea .drag-item")
// let dropArea = document.querySelector("#dropArea")

// for (let i = 0; i < dragItem.length; i++) {
//     dragItem[i].addEventListener("dragstart",function (e) {
//         e.dataTransfer.setData('qonce', this.id)
//         this.style.background = "red"
//     })
    
// }

// dropArea.addEventListener("dragover", function (j) {
//     j.preventDefault()
//     this.style.background = 'yellow'
// })

// dropArea.addEventListener("dragleave", function () {
//     this.style.background = 'transparent'
// })

// dropArea.addEventListener("drop",function (m) {
//     m.preventDefault()
//     let myId = m.dataTransfer.getData('qonce')
//     let dragItem = document.getElementById(myId)
//     dropArea.appendChild(dragItem)
// })

let btn = document.querySelectorAll('#accordion button')
let p = document.querySelectorAll('#accordion p')

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click",function(){
        for (let j = 0; j < p.length; j++) {
            p[j].classList.remove("active")
            
        }
        this.nextElementSibling.classList.add("active")
    })
    
}