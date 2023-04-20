let p = document.querySelectorAll('.txt1')
// p.onclick=function () {
//     this.style.color="red"
// }
for (let i = 0; i < p.length; i++) {
    p[i].onclick=function () {
        this.style.color="red"
    }
    
}
