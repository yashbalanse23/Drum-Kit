numofBtn = document.querySelectorAll(".drum").length;

function playsound(key){

        switch (key)  {
            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;

            case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;

            case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;    
            
            case "d":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

            case "l":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

            default:
                console.log(this)
                break;
        }

    }


for (var i=0; i<numofBtn; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttontext = this.innerHTML;
        playsound(buttontext);
    });

}

addEventListener("keypress", function(event){
    var kepPresssed = event.key;
    playsound(kepPresssed);
});



