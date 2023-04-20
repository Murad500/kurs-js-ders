// let next = document.querySelector('#blog .three p .a')
// let second = document.querySelector('#blog .second')

// next.addEventListener('click',function () {
//     next.classList.add('active')
// })

var acc = document.querySelectorAll('#blog .three p .a')

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    if (acc.style.display === "block") {
      acc.style.display = "none";
    } else {
      acc.style.display = "block";
    }
  });
}