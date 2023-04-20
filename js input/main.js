
var myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

let textChat = document.querySelector('#section .div .input input')

textChat.addEventListener('keyup',function(e){
    // console.log(e);
    if (e.keyCode===13) {
        if (textChat.value.trim()!='') {
            if (textChat.value[0].toUpperCase()==textChat.value[0]) {
                addChat('support')
            }
            else{
                addChat('user')
            }   
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
            <p class="time">${dt.getHours()+":"+dt.getMinutes()}</p>
            </div>
            
            `
        )
        main.scrollTop=main.scrollHeight
    }