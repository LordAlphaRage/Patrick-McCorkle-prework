// Interactive Style Changes 

function changeHBackground ()  {

  document.getElementById("main heading").style.backgroundColor= "gold";
  document.getElementById("main heading").style.fontWeight="bold";
  document.getElementById("main heading").style.fontStyle= "italic";
  document.getElementById("main heading").style.color= "purple";

}

function returnHBackground ()  {

  document.getElementById("main heading").style.backgroundColor= "";
  document.getElementById("main heading").style.fontWeight="";
  document.getElementById("main heading").style.fontStyle= "";
  document.getElementById("main heading").style.color= "";


}

function changePStuff ()  {

document.getElementById("main p").style.backgroundColor= "yellow";
document.getElementById("main p").style.fontSize="xx-large";
document.getElementById("main p").style.fontWeight="bold";
document.getElementById("main p").style.fontStyle="oblique";
document.getElementById("main p").style.color= "magenta";

}

function returnPStuff ()  {
  document.getElementById("main p").style.backgroundColor= "";
  document.getElementById("main p").style.fontSize="";
  document.getElementById("main p").style.fontWeight="";
  document.getElementById("main p").style.fontStyle="";
  document.getElementById("main p").style.color= "";
  
}

function changeGStuff ()  {

  document.getElementById("guesses").style.backgroundColor= "red";
  document.getElementById("guesses").style.fontSize="xx-large";
  document.getElementById("guesses").style.fontWeight="bold";
  document.getElementById("guesses").style.fontStyle="italic";
  document.getElementById("guesses").style.color= "purple";


}

function returnGStuff ()  {
  document.getElementById("guesses").style.backgroundColor= "";
  document.getElementById("guesses").style.fontSize="";
  document.getElementById("guesses").style.fontWeight="";
  document.getElementById("guesses").style.fontStyle="";
  document.getElementById("guesses").style.color= "";

}

function changeG2Stuff ()  {

  document.getElementById("guesses 2").style.backgroundColor= "blue";
  document.getElementById("guesses 2").style.fontSize="200%";
  document.getElementById("guesses 2").style.fontWeight="bold";
  document.getElementById("guesses 2").style.fontSize="xx-large";
  document.getElementById("guesses 2").style.fontStyle="oblique";
  document.getElementById("guesses 2").style.color= "purple";

}

function returnG2Stuff ()  {
    document.getElementById("guesses 2").style.backgroundColor= "";
    document.getElementById("guesses 2").style.fontSize="";
    document.getElementById("guesses 2").style.fontWeight="";
    document.getElementById("guesses 2").style.fontStyle="";
    document.getElementById("guesses 2").style.color= "";

}

//Create An Array 

//Array of Emperors

var emperors =  [

"Augustus",

"Claudius",

"Vespasian",

"Nerva",

"Trajan",

"Marcus Aurelius",

"Septimius Severus",

"Aurelian",

"Diocletian",

"Constantine",

"Julian",

"Valens",

"Theodosius",

"Valentinian",

"Romulus Augustulus"

];

// VARIABLES, TO BE GIVEN VALUE BY FUNCTIONS

var randomEmp = "";
var litterisofEmp = "";
var blanks= 0;
var blanksAndCorrect= [];
var incorrectGuess = [];


// VARIABLES TO BE INCREASED, COUNTERS

var victories = 0;
var vanquished = 0;
var attemptsRemain = 10


// FUNCTIONS OF THE GAME 

// STARTING THE GAME

// COMPUTER PULLS RANDOM EMPEROR

randomEmp = emperors[Math.floor(Math.random()* emperors.length)];

console.log(randomEmp);

alert(randomEmp);

// DIVIDE RANDOM EMP INTO DIFFERENT ARRAYS+STORE IN NEW ARRAY

litterisofEmp = randomEmp.split("");

console.log(litterisofEmp);


// PROPERLY STORE LENGTH OF RANDOM EMP IN BLANKS

blanks = litterisofEmp.length;

// LOOP TO MAKE "_" FOR EACH LETTER IN THE RANDOM EMP

for (var i = 0; i< blanks; i++) {

  blanksAndCorrect.push("_");

}

// DOM MANIPULATION TO SHOW "_" IN THE HTML

document.getElementById("currentEmp").innerHTML = " " + blanksAndCorrect.join(" ");









//Use plenty of functions!


//Create underscores based on lengths of words

