/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, currentPlayer, roundScore;

scores = [0, 0];
activePlayer = 0;
roundScore = 0;

//dice = Math.ceil(Math.random() * 6);
//document.querySelector("#current-" + activePlayer).textContent = dice;

document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";


document.querySelector(".btn-roll").addEventListener("click", function(){
    let dice;
    dice = Math.ceil(Math.random() * 6);

    document.querySelector("#current-" + activePlayer).textContent = dice;

    let dicePic = document.querySelector(".dice");
    dicePic.style.display = "block"; 
    dicePic.src = "imgs/dice-" + dice + ".png";

    if(dice !== 1){
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
        document.querySelector("#current-" + activePlayer).textContent = 0;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = "0";
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player--panel").classList.toggle("active");
        document.querySelector(".dice").style.display = "none";

        //document.querySelector(".player-0-panel").classList.remove("active")
        //document.querySelector(".player-0-panel").classList.remove("active")
    }
})





document.querySelector(".btn-hold").addEventListener("click", function(){
    scores[activePlayer] += roundScore;
    if(scores[activePlayer] >= 120){
        document.getElementById("name-" + activePlayer).textContent = "The winner";
        document.getElementById("score-0").textContent = "0";
        document.getElementById("score-1").textContent = "0";
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";
    }
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player--panel").classList.toggle("active");
})

document.querySelector(".btn-new").addEventListener("click", function(){

})