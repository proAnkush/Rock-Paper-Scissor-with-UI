
// number of times each one won 
let user_win = 0;
let com_win = 0;
let Round = 0;
let user_input = null;
let playing = false;

// start
// play()
greet();
function greet(){
    const greetDiv = document.getElementById("greet-div");
    delay(3000);
    
}
function delay(time){
    setTimeout(function(){document.getElementById("greet-div").remove()}, time);
}

function computerPlay(){
    // computer's input, should be Rock || Paper || Scissor randomly

    let valueNum =  Math.floor(Math.random() * 3);
    if(valueNum == 0){
        return "Rock";
    }else if (valueNum == 1){
        return "Paper";
    }else{
        return "Scissor";
    }
}

function getInput(e){
    user_input = e.value;
    if(Round > 0 && playing==true){
        start();
    }else{
        playing = false;
        document.getElementById("heading2").textContent = "Click the start button to Start the Game!";
        user_input = null;
    }
    return;
}

function play(){
    // Main Game loop
    // start button clicked

    //reset
    user_win = 0;
    com_win = 0;
    Round = 5;
    playing = true;
    document.getElementById("start").textContent = "Restart";
    document.getElementById("Yscore").textContent = "Human: " + user_win;
    document.getElementById("Cscore").textContent = "Computer: " + com_win;
    document.getElementById("heading2").textContent = "So what will your choice be!";
    // end reset

    document.getElementById("start").style = "background-color: black";
    // total rounds
    //getInput();
    playing = true;


}

function start(){
    // round start
    if(Round >= 0){
        Round--;
        if(user_input != null){
            Outcome(user_input, computerPlay() );
        }
        
    }
    if(Round == 0){
        document.getElementById("start").style = "background-color: red";
        playing = false;
        end();
    }
    
}
function end(){
    if(user_win > com_win){
        document.getElementById("Yscore").textContent = "Human: " + user_win + " The Human is victorious";
    }else if(user_win < com_win){
        document.getElementById("Cscore").textContent = "Computer: " + com_win + "          " + " Win is Me!";
    }else{
        document.getElementById("Cscore").textContent = "Computer: " + com_win + "          " + " Tie :-(";
    }
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function Outcome(user_input, com_input){
    // for single game
    if((user_input != null) && user_input.toLowerCase() == com_input.toLowerCase()){
        document.getElementById("heading2").textContent = "Tie";
    }else if(playerWon(user_input, com_input)){
        user_win++;
        document.getElementById("Yscore").textContent = "Human: " + user_win;
        document.getElementById("heading2").textContent = "Human wins";
    }else if(!playerWon(user_input, com_input)){
        com_win++;
        document.getElementById("Cscore").textContent = "Computer: " + com_win;
        document.getElementById("heading2").textContent = "Computer wins";
    }
}

function playerWon(user_input, com_input){

    user_input = user_input.toLowerCase();
    com_input = com_input.toLowerCase();

    // ties are already taken care of ;-)
    if(user_input == "rock"){
        if(com_input == "scissor"){
            return true;
        }else{
            return false;
        }
    }
    if(user_input == "paper"){
        if(com_input=="rock"){
            return true;
        }else{
            return false;
        }
    }
    if(user_input == "scissor"){
        if(com_input == "paper"){
            return true;
        }else{
            return false;
        }
    }
}

