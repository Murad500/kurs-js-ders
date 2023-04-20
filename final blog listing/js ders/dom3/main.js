let loader = document.querySelector(".loader")
window.onload=function () {
    setTimeout(() => {
        loader.classList.add("active")
        document.body.style.overflowY="scroll"
    }, 2000);
} 