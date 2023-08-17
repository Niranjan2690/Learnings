document.addEventListener("DOMContentLoaded", function(){
    var elm = document.createElement('h1');
    document.body.appendChild(elm);
    elm.innerText = "Hi Dhruvesh"
})


window.onload = function(){
    var elm1 = document.createElement('h1');
    document.body.appendChild(elm1);
    elm1.innerText = "Hi Saranya"
}

document.getElementById('box').innerHTML = "Welcome"


function init(){
    document.getElementById('box1').innerText = "Hi How are you Niranjan";
}
window.onload = init();