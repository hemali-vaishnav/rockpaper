import React, { useState } from 'react';
import './game.css';
import rockimage from '../assets/images/rock.png';
import paperimage from '../assets/images/paper.png';
import scissorsimage from '../assets/images/scissors.png';

export default function Game() {
    const [userScore, setUserScore] = useState(0);
    const [compScore, setCompScore] = useState(0);
    const [message, setMessage] = useState('Play your move');

    const genCompChoice = () => {
        const options = ["rock", "paper", "scissors"];
        const randIdx = Math.floor(Math.random() * 3);
        return options[randIdx]; 
    };

    const drawGame = () => {
        setMessage("Game was Draw. Play again.");
    };

    const showWinner = (userWin, userChoice, compChoice) => {
        if (userWin) {
            setUserScore(prevScore => prevScore + 1);
            setMessage(`You win! Your ${userChoice} beats ${compChoice}`);
        } else {
            setCompScore(prevScore => prevScore + 1);
            setMessage(`You lost. ${compChoice} beats your ${userChoice}`);
        }
    };

    const playGame = (userChoice) => {
        const compChoice = genCompChoice();
        if (userChoice === compChoice) {
            drawGame();
        } else {
            let userWin = true;
            if (userChoice === "rock") {
                userWin = compChoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                userWin = compChoice === "scissors" ? false : true;
            } else {
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
        }
    };

    return (
        <>
            <h1>Rock Paper Scissors</h1>
            <div className="choices">
                <div className="choice" id="rock" onClick={() => playGame('rock')}>
                    <img src={rockimage} alt="rock" />
                </div>
                <div className="choice" id="paper" onClick={() => playGame('paper')}>
                    <img src={paperimage} alt="paper" />
                </div>
                <div className="choice" id="scissors" onClick={() => playGame('scissors')}>
                    <img src={scissorsimage} alt="scissors" />
                </div>
            </div>

            <div className="score-board">
                <div className="score">
                    <p id="user-score">{userScore}</p>
                    <p>You</p>
                </div>
                <span>Vs</span>
                <div className="score">
                    <p id="comp-score">{compScore}</p>
                    <p>Computer</p>
                </div>
            </div>

            <div className="msg-container">
                <p id="msg">{message}</p>
            </div>
        </>
    );
}
