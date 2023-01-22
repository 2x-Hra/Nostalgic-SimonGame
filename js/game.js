const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false ;
var level = 0;

$(document).on("keydown",function(){
    if(!started){
        
        $("#level-title").text("Level "+ level);
        nextSequence();
        started = true;
    }
    else{

    }
})

$(".btn").on("click", function(event){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern );
    playSound(userChosenColor);
    animatePress(userChosenColor);
});


function nextSequence() {
    level ++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4 );
    console.log(randomNumber);
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    
}
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress( currentColor){
    var theButton = $("#"+currentColor);
    theButton.addClass("pressed");
    setTimeout( function(){
        theButton.removeClass("pressed")
    }, 100);
}



