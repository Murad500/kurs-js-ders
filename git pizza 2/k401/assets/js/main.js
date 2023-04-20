let area = document.getElementById("area")
let place = document.getElementById("place")
let mobileTab = document.getElementById("mobile-tab")


let jsonSalt = {
    count: 0
}

localStorage.setItem('saltres', JSON.stringify(jsonSalt))

place.onmousedown = function (e) {

    let data = e.toElement.className
    localStorage.setItem("piece", JSON.stringify(data))
}


mobileTab.onmousedown = function (e) {

    let data = e.toElement.className
    localStorage.setItem("piece", JSON.stringify(data))
}

var clicks = 0;
area.onmousedown = function (a) {
    let div = document.createElement("div")
    div.className = localStorage.getItem("piece").replaceAll('"', "")
    let resY = Math.round((a.clientY / area.offsetHeight) * 100)
    let resX = Math.round((a.clientX / area.offsetWidth) * 100)
    div.style.top = resY + "%"
    div.style.left = resX + "%"
    area.append(div)
    let classNameCheck = localStorage.getItem("piece").replaceAll('"', "")
    let classCounterCheck = JSON.parse(localStorage.getItem("saltres"))

    let ambulance = new Audio('ambulance.mp3')

    if (classNameCheck == "addsalt") {
        clicks += 1;
        jsonSalt = {
            count: clicks
        }
        localStorage.setItem('saltres', JSON.stringify(jsonSalt))

        if (classCounterCheck.count > 15) {
            let visibilty = document.getElementsByClassName("salt")
            visibilty[0].classList.remove("hidden")
            ambulance.play()
        }
    }
}

let olcu = document.querySelector('.olcu')
let kicik = document.querySelector('.kicik')


olcu.addEventListener("click",function(){
    olcu.classList.add("active2")
})

kicik.addEventListener("click",function(){
    kicik.classList.toggle("active3")
})



function Refresh() {
    window.location = "/"
}