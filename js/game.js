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
// This will Start the game and Choose random color 
$(".btn").on("click", function(event){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern );
    playSound(userChosenColor);
    animatePress(userChosenColor);
    var lastAnswerIndex = buttonColors.indexOf(userChosenColor);
    console.log("last index ::"+ lastAnswerIndex);
    checkAnswer(lastAnswerIndex);
});


function nextSequence() {
    userClickedPattern = [];
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

function checkAnswer( currentLevel ){
   
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
        if (userClickedPattern.length === gamePattern.length){
  
        
            setTimeout(function () {
            nextSequence();
            }, 1000);
        }
  
    }
    else{
        console.log("wrong");
    }
}
