const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var startValue = 0 ;
var level = 0;
$(".btn").on("click", function(event){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern );
    playSound(userChosenColor);
    animatePress(userChosenColor);
});


function nextSequence() {
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
$(document).ready(function(){
    $(document).on("click",function(){
        if(startValue === 0){
            startValue = 1;
            $("h1").text("Level "+ level);
            nextSequence();
        }
        else{
    
        }
    })
})
