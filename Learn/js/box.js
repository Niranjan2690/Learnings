function addbox(){
    var box = document.createElement('div');
    box.setAttribute('class', 'box');
    document.getElementsByClassName('container')[0].appendChild(box)
}

function remove(){
    var removebox = document.getElementsByClassName('container')[0].firstChild;
    if(removebox){
        document.getElementsByClassName('container')[0].removeChild(removebox)
    }
}

function stop(){
    document.getElementsByTagName('button')[0].removeEventListener('click', addbox)
}

function init(){
    document.getElementsByTagName('button')[0].addEventListener('click', addbox)
    document.getElementsByTagName('button')[1].addEventListener('click', remove)
    document.getElementsByTagName('button')[2].addEventListener('click', stop)
}

document.addEventListener('DOMContentLoaded', init)