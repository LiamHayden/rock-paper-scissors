/*
This program will allow the user to play 5 games of Rock, Paper and Scissors
against the computer, within the console. 
Author: Liam Hayden
Date: 12/05/2021
*/

// function for the computer to return rock, paper or scissors
function computerPlay() {
    // have an array with options
    let options = ["Rock", "Paper", "Scissors"];
    // use Math.random and Math.floor to select one at random and return the selected option
    return options[Math.floor(Math.random() * 3)];
    
}

console.log(computerPlay());

// function to play a single round
function singleRound(playerSection, computerSelection) {

}

// function to play 5 rounds of the game
function game () {

}