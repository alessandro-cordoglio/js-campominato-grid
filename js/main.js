"use strict"
/* VARIABLES */
/* variabili di supporto */
const board= document.querySelector("#board")
const start= document.getElementById("start")
/* FUNCTIONS */
//funzione x creazione dei box
function createBox(cellnumber){
    for (let i = 1; i <= cellnumber; i++) {
        const box= document.createElement("div")
        box.innerHTML= i
        box.classList.add("box")
        board.append(box)
        if (cellnumber===81) {
            box.classList.replace("box","box_normal");
        }else if (cellnumber===49) {
            box.classList.replace("box","box_easy");
        }
    }
   
}

/* MAIN SCRIPT */
start.addEventListener("click", function(){
    const difficultyChoice= document.getElementById("difChoice").value
    document.querySelector("#start").disabled = true;
    if (difficultyChoice==="hard") {
        createBox(100)
    }else if(difficultyChoice==="normal"){
        createBox(81)
    }else if(difficultyChoice==="easy"){
        createBox(49)
    }
});  

