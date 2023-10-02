
var numOfButton = document.querySelectorAll(".drum").length;
for(var i=0; i<numOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var currentKey = this.innerHTML;
    makeSound(currentKey);
    buttonAnimation(currentKey);
});}


document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(keyword){
    if(keyword == 'w'){
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
    }else if(keyword == 'a'){
        var audio = new Audio('./sounds/tom-2.mp3');
        audio.play();
    }else if(  keyword == 's'){
        var audio = new Audio('./sounds/tom-3.mp3');
        audio.play();
    }else if(keyword == 'd'){
        var audio = new Audio('./sounds/tom-4.mp3');
        audio.play();
    }else if(keyword == 'j'){
        var audio = new Audio('./sounds/snare.mp3');
        audio.play();
    }else if(keyword == 'k'){
        var audio = new Audio('./sounds/kick-bass.mp3');
        audio.play();
    }else{
        var audio = new Audio('./sounds/crash.mp3');
        audio.play(); 
    }
}


function buttonAnimation(currentKey){
    var activebutton = document.querySelector("." + currentKey);
    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    }, 100);
}






