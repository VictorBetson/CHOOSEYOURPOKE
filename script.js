console.log (" work ")

document.querySelector(".Eevee").style = "display:none";
document.querySelector(".Pikachu").style = "display:none";
document.querySelector(".Charmander").style = "display:none";
document.querySelector(".Squirtle").style = "display:none";
document.querySelector(".Bulbasaur").style = "display:none";

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
else if (answerA === "Defensive")
    console.log ("Defensive answer Work")

if(answerN === "Passive" && answerA === "Offensive") {
    console.log ("Pikachu") 
document.querySelector(".Pikachu").style = "display:block"
    document.querySelector(".Charmander").style = "display:none"
        document.querySelector(".Squirtle").style = "display:none"
            document.querySelector(".Eevee").style = "display:none"
                document.querySelector(".Bulbasaur").style = "display:none"
}
else if (answerN === "Aggressive" && answerA === "Offensive") {
    console.log ("Charmander") 
    document.querySelector(".Pikachu").style = "display:none"
    document.querySelector(".Charmander").style = "display:block"
        document.querySelector(".Squirtle").style = "display:none"
            document.querySelector(".Eevee").style = "display:none"
                document.querySelector(".Bulbasaur").style = "display:none"
}
else if (answerN === "Passive" && answerA === "Defensive") {
    console.log ("Bulbasaur") 
    document.querySelector(".Pikachu").style = "display:none"
    document.querySelector(".Charmander").style = "display:none"
        document.querySelector(".Squirtle").style = "display:none"
            document.querySelector(".Eevee").style = "display:none"
                document.querySelector(".Bulbasaur").style = "display:block"
}
else if (answerN === "Aggressive" && answerA === "Defensive") {
    console.log ("Squirtle") 
    document.querySelector(".Pikachu").style = "display:none"
    document.querySelector(".Charmander").style = "display:none"
        document.querySelector(".Squirtle").style = "display:block"
            document.querySelector(".Eevee").style = "display:none"
                document.querySelector(".Bulbasaur").style = "display:none"
}
else if (answerN !== "Aggressive" && answerN !== "Passive" || answerA !== "Defensive" && answerA !== "Offensive") {
console.log ("Eevee")
document.querySelector(".Pikachu").style = "display:none"
    document.querySelector(".Charmander").style = "display:none"
        document.querySelector(".Squirtle").style = "display:none"
            document.querySelector(".Eevee").style = "display:block"
                document.querySelector(".Bulbasaur").style = "display:none"
}
};