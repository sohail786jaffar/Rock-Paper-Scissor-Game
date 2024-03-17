let userChoice=document.querySelectorAll(".choice")
// let choiceRock=document.querySelector(".choiceRock")
// let choicePaper=document.querySelector(".choicePaper")
// let choiceScissor=document.querySelector(".choiceScissor")
let computerChoiceAni=document.querySelectorAll(".computerChoice")
let userScore=0;
let compScore=0;
console.log(userChoice)

userChoice.forEach((box)=>{
    box.addEventListener("click",()=>{
        const userChoice= box.getAttribute("id")
        box.classList.add("animation")
        box.addEventListener("animationend", () => {
            box.classList.remove("animation");
        });
        console.log(userChoice)
        playGame(userChoice)
       

    })
    
})

computerChoiceAni.forEach((box) => {
    box.addEventListener("click", () => {
        const compChoice = box.getAttribute("id");
        box.classList.add("animation");
        box.addEventListener("animationend", () => {
            box.classList.remove("animation");
        });
        
    });
});

const computerChoice=()=>{
    let choices=["rock","paper","scissors"]
    let computerChoice=Math.floor(Math.random()*3)
    document.querySelector(".computerChoiceShow").innerText=`Computer chose ${choices[computerChoice]}`
    return choices[computerChoice]
}

const playGame=(userChoice)=>{
    let compChoice=computerChoice();
    console.log(compChoice)
    if (compChoice===userChoice){
        console.log("tie")
        document.getElementById("winner").innerText="Tie" 
    }
    else {
        let userWin=true
        switch (userChoice){
            case "rock":
                if (compChoice==="scissors"){
                    userWin=false;
                }
                break;
            case "paper":
                if (compChoice==="rock"){
                    userWin=false;
                }
                break;
            case "scissors":
                if (compChoice==="paper"){
                    userWin=false;
                }
                break;
        } 
        winner(userWin,userChoice,compChoice)

    }
   
}

const winner=(userWin,userChoice,compChoice)=>{
    if (userWin){
        
        console.log("you win")
        userScore++
        document.getElementById("personWinCount").innerText=userScore
        document.getElementById("winner").innerText="congratulations you win" 
        
    }
    else {
        compScore++
        console.log("computer win")
        document.getElementById("computerWinCount").innerText=compScore
        document.getElementById("winner").innerText="OOPs You Loss " 
       
    }
}

 