let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompChoice = () =>{
    const options = ["rock", "paper","scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const drawGame = () =>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userchoice,compChoice)=>{
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
       msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
       msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You Lost ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice)=>{
    //Generate computer choice
    const compChoice = gencompChoice();

    if(userchoice === compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userchoice === "paper"){
            //rock , scissors
          //  userWin = compChoice === "scissors" ? false : true;

         if (compChoice ===" scissors"){
            userWin=false;
         }else{
            userWin=true;
         }

        }else if (userchoice === "rock") {
            //scissors , paper
          //  userWin = compChoice === "paper" ? false : true;

          if (compChoice === "paper"){
            userWin=false;
          }else{
            userWin=true;
          }

        } else {
            // rock paper
           // userWin = compChoice === "rock" ? false : true;

           if(compChoice === "rock"){
            userWin=false;
           }else{
            userWin=true;
           }
        }

        showWinner(userWin,userchoice,compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click" , () =>{
        const userchoice= choice.getAttribute("id");
        playGame(userchoice);
    })
})