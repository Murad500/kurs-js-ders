

setInterval(snow,50)

function snow() {
  const snow1 = document.createElement("i");
  snow1.classList.add("fa-regular");
  snow1.classList.add("fa-snowflake");
snow1.style.left =Math.random() * 1250+ "px";
snow1.style.animationDuration=Math.random()*3+2+"s";
snow1.style.opacity=Math.random();
snow1.style.fontSize=Math.random()*4+6+"px"
  document.body.appendChild(snow1);
  setTimeout(()=>{
    snow1.remove();
  },5000)
}
// keydown=  function event(e){
//   const picture = document.querySelectorAll(" .picture");
//   let left = picture.offsetLeft;
//   let top=picture.offsetTop;
// let code = e.key;

// const picture = document.querySelectorAll(".picture");
document.addEventListener("keydown",(e)=>{
if(e.key===37){
console.log("salam");
}
if(e.code===38){
  console.log("salam");
  }
  if(e.Code===39){
    console.log("salam");
    }
    if(e.Code===40){
      console.log("salam");
      }

})


// const picture = document.querySelectorAll(" .picture");
// picture.addEventListener("keydown", (event) => {
//   if (event.isComposing || event.keyCode === 229) {
//     return;
//   }
//   // do something
// });





