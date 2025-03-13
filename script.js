console.log (" work ")
let nature = document.querySelector(".Passive");
console.log (nature);
let attack = document.querySelector(".Offensive");
console.log (attack);
let button = document.querySelector("button");

button.onclick = function(){
console.log (" butto work ")
let answerN = nature.value;
console.log ("naturewor")
let answerA = attack.value;
console.log ("attackwor")

if(answerN === "Passive")
console.log("Passive Answer Work")
else if (answerN === "Aggressive")
    console.log ("Aggressive answer Work")

if(answerA === "Offensive")
    console.log("Attack Answer Work")
};