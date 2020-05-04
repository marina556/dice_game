/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let player,current,score,dice,playing;
score=[0,0];
current=0;
player=0;
dice=0;
playing=true;


document.querySelector(".dice").style.display="none";
document.querySelector(".btn-roll").addEventListener('click',roll);
document.querySelector(".btn-hold").addEventListener('click',hold);
document.querySelector(".btn-new").addEventListener('click',newgame);


function roll(){
    if(playing){
        dice=Math.floor(Math.random()*6+1);
        document.querySelector(".dice").style.display="block";
        document.querySelector(".dice").setAttribute("src",`dice-${dice}.png`);

        if(dice !== 1){
            current+=dice;
            document.getElementById(`current-${player}`).innerText=current;
        }
        else{
            nextpalayer()
        }
        }
}


function hold(){
    if(playing){
        document.querySelector(".dice").style.display="none";
        score[player]+=current;
        document.getElementById(`score-${player}`).innerText=score[player];
        if(score[player] >= 20){
            document.querySelector(`.player-0-panel`).classList.remove('active');
            document.querySelector(`.player-1-panel`).classList.remove('active');
            document.getElementById(`name-${player}`).innerHTML+=' is winner';
            document.querySelector(`.player-${player}-panel`).classList.add('winner');
            document.getElementById(`current-${player}`).innerText=0;
            document.querySelector(".dice").style.display="none";
            playing=false;

        }
        else{
            nextpalayer()
        }
    }
}


function nextpalayer(){
    document.querySelector(".dice").style.display="none";
    current=0;
    document.getElementById(`current-${player}`).innerText=current;
    player === 1 ? player = 0 : player = 1 ;
    document.querySelector(`.player-0-panel`).classList.toggle('active');
    document.querySelector(`.player-1-panel`).classList.toggle('active');
}


function newgame(){
    score=[0,0];
    current=0;
    player=0;
    dice=0;
    playing=true;

    document.querySelector(".dice").style.display="none";
    document.getElementById(`current-1`).innerText=current;
    document.getElementById(`current-0`).innerText=current;
    document.getElementById(`score-0`).innerText=score[player];
    document.getElementById(`score-1`).innerText=score[player];
    document.querySelector(`.player-0-panel`).classList.add('active');
    document.querySelector(`.player-1-panel`).classList.remove('active');
    document.querySelector(`.player-1-panel`).classList.remove('winner');
    document.querySelector(`.player-0-panel`).classList.remove('winner');
    document.getElementById(`name-0`).innerHTML='player 1';
    document.getElementById(`name-1`).innerHTML='player 2';


}