let userscore = 0;
let compscore=0;

const choices = document.querySelectorAll(".choice");

const msg_para = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const drawgame = () => {
    console.log("Draw Game!");
    msg_para.innerText = "Game Draw! Play Again";
    msg_para.style.backgroundColor = "purple";
}

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}

const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log(" Hurray, You Won!");
        msg_para.innerText = `You Win! your ${userchoice} beats ${compchoice}`;
        msg_para.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("Oh Shit You Lost!")
        msg_para.innerText = `You Lost! Comp's ${compchoice} beats ${userchoice}`
        msg_para.style.backgroundColor = "red";
    }
}
const playgame = (userchoice) => {
    console.log("User Choosen: ",userchoice);
    const compchoice = genCompChoice();
    console.log("Computer Choosen: ",compchoice);
    if(userchoice == compchoice){
        drawgame();
    }
    else {
        let userwin = true;
        if(userchoice == "rock"){
            userwin = compchoice == "paper" ? false : true;  
        }
        else if(userchoice == "paper"){
            userwin = compchoice == "scissor" ? false : true;
        }
        else{
            userwin = compchoice == "rock" ? false : true ;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
        
    })
})