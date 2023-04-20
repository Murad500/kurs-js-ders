// let icon = document.querySelector('.icon')
// let one = document.querySelector('.one')
// let two = document.querySelector('.two')
// let three = document.querySelector('.three')

// let ulli = document.querySelector('.ulli')
// let home = document.querySelector('.home')
// let link = document.querySelector('.link')
// let dopdown = document.querySelector('.dopdown')
// let disabled = document.querySelector('.disabled')
// icon.addEventListener('click',function () {
//     one.classList.toggle('active1')
//     two.classList.toggle('active2')
//     three.classList.toggle('active3')
//     ulli.classList.toggle('murad')
//     home.classList.toggle('home1')
//     link.classList.toggle('link1')
//     dopdown.classList.toggle('dopdown1')
//     disabled.classList.toggle('disabled')
// })
// // ulli.onclick=function () {
// //     this.classList.add("home1")
// // }
// for (let i = 0; i < ulli.length; i++) {
//   ulli[i].addEventListener("click",function () {

//     home.classList.toggle("home1")
//   })
  
// }

var acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}