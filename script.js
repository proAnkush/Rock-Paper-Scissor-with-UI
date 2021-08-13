
// number of times each one won 
let user_win = 0;
let com_win = 0;
let Round = 5;

// start
play();

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

function play(){
    // Main Game loop

    // total rounds

    while(Round > 0){
        let user_input = prompt("Rock, Paper or Scissor? ");
        if(user_input == ""){
            console.log("No input, Ending the game, Coward!");
            return;
        }
        if(checkValidInput(user_input) == false){
            console.log("Don't know how to play, Huh! Been there, Done that!");
            return;
        }
        let com_input = computerPlay();
        printOutcome(user_input, com_input);
        Round--;
    }
    if(user_win > com_win){
        console.log("Finally, The human is victorious");
    }else if(user_win < com_win){
        console.log("I am better than you will ever be.");
    }else{
        console.log("A tie, what does it even mean! Arrgggggghhhhhh.......");
    }

    if(prompt("How about another round? yes?").toLowerCase() == "yes"){
        play();
    }
}

function checkValidInput(user_input){
    if(user_input != null || user_input != undefined){
        let ui = user_input.toLowerCase();
        if(ui == "rock" || ui == "paper" || ui == "scissor"){
            return true;
        }
        else{
            return false;
        }
    }else{
        return false;
    }
    
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function printOutcome(user_input, com_input){
    // for single game
    if(user_input.toLowerCase() == com_input.toLowerCase()){
        console.log("There is a Tie...");
    }else if(playerWon(user_input, com_input)){
        user_win++;
        console.log("You win, " + capitalizeFirstLetter(user_input) + " beats " + capitalizeFirstLetter(com_input));
    }else {
        com_win++;
        console.log("You lose, " + capitalizeFirstLetter(user_input) + " loses to " + capitalizeFirstLetter(com_input) );
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

