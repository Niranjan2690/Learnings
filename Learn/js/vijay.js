function fun1(){
    console.log("Fun1 on load...")
}

function fun2(){
    console.log("Fun2 on load...")
}

function fun3(){
    console.log("Fun3 on load")
}

window.addEventListener("load", fun2)
document.addEventListener('DOMContentLoaded', fun3)


