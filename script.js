/*
This program will allow the user to play 5 games of Rock, Paper and Scissors
against the computer, within the console. 
Author: Liam Hayden
Date: 12/05/2021
*/

// function for the computer to return rock, paper or scissors
function computerPlay() {
    // have an array with options
    let options = ["rock", "paper", "scissors"];
    // use Math.random and Math.floor to select one at random and return the selected option
    return options[Math.floor(Math.random() * 3)];
    
}

// function to play a single round against the computer
function singleRound(playerSelection, computerSelection) {
    // if computer and players choice is the same == draw
    if (playerSelection === computerSelection) {
        return "Draw";
    }
    // else if paper beats rock
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "Player wins! Paper beats rock";
    }

    // else if rock beats scissors 
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Player wins! Rock beats scissors";
    }
    // else if scissors beats paper
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Player wins! Scissors beats paper";
    }
    // otherwise computer wins
    else {
        return "Computer wins! " + computerSelection + " beats " + playerSelection;
    }
}

// function to play 5 rounds of the game
function game () {
    // Use a for loop to loop through the singleRound function. Also get users input for each round
    for (i = 0; i < 5; i++) {
        let playerSelection;
        // Get users choice
        do {
            playerSelection = prompt("Choose Rock, Paper or Scissors: ").toLowerCase();
        } while(!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"));
        // Call singleRound function 
        console.log(singleRound(playerSelection, computerPlay()));

    }
}

// Call game function 
game();