import React from 'react';

import './game.css';

import rockimage from '../assets/images/rock.png';
import paperimage from '../assets/images/paper.png';
import scissorsimage from '../assets/images/scissors.png';




let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; 
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    } 
};


const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }  
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});



export default function Game() {
    return (
        <>
            <h1>Rock Paper Scissors</h1>
            <div className="choices">
                <div className="choice" id="rock">
                    <img src={rockimage} />
                </div>
                <div className="choice" id="paper">
                    <img src={paperimage} />
                </div>
                <div className="choice" id="scissors">
                    <img src={scissorsimage} />
                </div>
            </div>

            <div className="score-board">
                <div className="score">
                    <p id="user-score">0</p>
                    <p>You</p>
                </div>
                <span>Vs</span>
                <div className="score">
                    <p id="comp-score">0</p>
                    <p>Computer</p>
                </div>
            </div>

            <div className="msg-container">
                <p id="msg">Play your move</p>
            </div>

        </>
    )
}
