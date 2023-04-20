let chat=document.querySelector('#chat')
let textChat=document.querySelector('#chat #chat-text')
let main=document.querySelector('#chat main')
let button = document.querySelector("#chat button")






// for (i = 0; i < main.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   main[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// Add a "checked" symbol when clicking on a list item







button.addEventListener("click", function () {
    if (textChat.value.trim()!='') {
        if (textChat.value[0].toUpperCase()==textChat.value[0]) {
            addChat('user')
            alert("Daxil edek?")
        }
        else{
            addChat('user')
            alert("Daxil edek?")
        }   
    }
    else{
        alert("ORXAN MÜƏLLİM İCAZƏ VERMİR !!! \n \nBAŞA DÜŞ");
    }
    textChat.value=""
})

textChat.addEventListener('keyup',function(e){
// console.log(e);
if (e.keyCode===13) {
    if (textChat.value.trim()!='') {
        if (textChat.value[0].toUpperCase()==textChat.value[0]) {
            addChat('user')
            alert("Daxil edek?")
        }
        else{
            addChat('user')
            alert("Daxil edek?")
        }   
    }
    else{
        alert("ORXAN MÜƏLLİM İCAZƏ VERMİR !!! \n \nBAŞA DÜŞ");
    }
    textChat.value=""

}
})


function addChat(clname){
    let dt=new Date()
    main.insertAdjacentHTML(
        'beforeend',
        `
        <div class="message ${clname}">
        <p>${textChat.value}</p>
        </div>
        
        `
    )
    main.scrollTop=main.scrollHeight
}
