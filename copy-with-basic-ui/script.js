/*
This program will allow the user to play 5 games of Rock, Paper and Scissors
against the computer, within the console. 
Author: Liam Hayden
Date: 12/05/2021 
Editted: 20/05/2021
*/

// function for the computer to return rock, paper or scissors
function computerPlay() {
    // have an array with options
    let options = ["rock", "paper", "scissors"];
    // use Math.random and Math.floor to select one at random and return the selected option
    return options[Math.floor(Math.random() * 3)];
    
}

// Intialise counters
let playerScoreCount = 0;
let computerScoreCount = 0;

// determine winner when player or computer reachs 5 wins.
function overallWinnder(pCount, cCount) {
    if (pCount == 5) {
        result.textContent = "Player wins with " + pCount + " wins!!";
    } else if (cCount == 5) {
        result.textContent = ("Computer wins with " + cCount + " wins!!")
    }
}

// function to play a single round against the computer
function singleRound(playerSelection, computerSelection) {
    // if computer and players choice is the same == draw
    if (playerSelection === computerSelection) {
        return "Draw";
    }
    // else if paper beats rock
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScoreCount++;
        return "Player wins! Paper beats rock";
    }

    // else if rock beats scissors 
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScoreCount++;
        return "Player wins! Rock beats scissors";
    }
    // else if scissors beats paper
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScoreCount++;
        return "Player wins! Scissors beats paper";
    }
    // otherwise computer wins
    else {
        computerScoreCount++;
        return "Computer wins! " + computerSelection + " beats " + playerSelection;
    }
}

// creating UI
const result = document.querySelector('#result');
const score = document.querySelector('#score');
let playerSelection;
// rock
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    result.textContent = singleRound(playerSelection, computerPlay());
    score.textContent = "Player score: " + playerScoreCount + " Computer score:" + computerScoreCount;
    overallWinnder(playerScoreCount, computerScoreCount);
});

// paper
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    result.textContent = singleRound(playerSelection, computerPlay());
    score.textContent = "Player score: " + playerScoreCount + " Computer score:" + computerScoreCount;
    overallWinnder(playerScoreCount, computerScoreCount);
});

// scissors
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    result.textContent = singleRound(playerSelection, computerPlay());
    score.textContent = "Player score: " + playerScoreCount + " Computer score:" + computerScoreCount;
    overallWinnder(playerScoreCount, computerScoreCount);
});