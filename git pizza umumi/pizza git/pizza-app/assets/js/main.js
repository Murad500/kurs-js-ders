let area = document.getElementById("area")
let place = document.getElementById("place")
let mobileTab = document.getElementById("mobile-tab")


let red = '<div class="red"></div>'


place.onmousedown = function(e) {

    let data = e.toElement.className
    localStorage.setItem("piece",JSON.stringify(data))
}


mobileTab.onmousedown = function(e) {

    let data = e.toElement.className
    localStorage.setItem("piece",JSON.stringify(data))
}

area.onmousedown = function (a) {
    let div = document.createElement("div")
    div.className = localStorage.getItem("piece").replaceAll('"',"")
    let resY = Math.round((a.clientY / area.offsetHeight) * 100)
    let resX = Math.round((a.clientX / area.offsetWidth) * 100)
    div.style.top = resY+"%"
    div.style.left = resX+"%"
    area.append(div)
   
    // console.log(a.clientX);
    // console.log((a.screenY / 800) * 100);
    // console.log(((a.screenX / area.offsetWidth) * 100)+10);
    // console.log(((a.clientX / area.offsetWidth) * 100));
}

// area.onmousedown = function(e) {
//     console.log(e);
//     let div = document.createElement("div")
//     div.className = localStorage.getItem("piece").replaceAll('"',"")
//         let addY = e.screenY-200;
//         let addX = e.screenX-900;
//         let aY = document.documentElement.clientHeight /2
//         let aX = document.documentElement.clientWidth /3
//         div.style.top = addY+"px"
//         div.style.left = addX+"px"


//     console.log(area.offsetHeight);
//     // console.log(document.documentElement.clientWidth /3);
//     console.log(document.documentElement.clientHeight /2);

//     area.append(div)
// }