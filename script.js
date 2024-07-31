let userScore=0;
let compScore=0;


let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

function getDraw(){
    msg.innerHTML="It's a Draw";
    msg.style.backgroundColor="rgb(208, 179, 14)";

}

function checkwinner(compChoice,userChoice){
    
    
        if(userChoice=="rock"){
            return compChoice === "paper" ? false : true;
            
        }
        else if (userChoice === "paper") {
            //rock, scissors
            return compChoice === "scissors" ? false : true;
        } 
        else {
            //rock, paper
            return compChoice === "rock" ? false : true;
        }

}

function getcompChoice(){
    let a=Math.floor(1+Math.random()*3);

    let arr={
        1:"rock",
        2:"paper",
        3:"scissors"
    }
    console.log(arr[a]);
    return arr[a];
}


function playGame(userChoice){
    let compChoice=getcompChoice();
    if(compChoice==userChoice){
        getDraw()
    }
    else{

        let userwin=checkwinner(compChoice,userChoice)
        console.log(userwin)
        if(userwin){
            userScore++;
            userScorePara.innerHTML=`${userScore}`
            msg.innerHTML=`Player Win's! ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green";
            
        }
        else{
            compScore++;
            compScorePara.innerHTML=`${compScore}`
            msg.innerHTML=`Computer Win's! ${compChoice} beats ${userChoice}`;
            msg.style.backgroundColor="red";
            
        }
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice",userChoice);
        playGame(userChoice);

    })

})