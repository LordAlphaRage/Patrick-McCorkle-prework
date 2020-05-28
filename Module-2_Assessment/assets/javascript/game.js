//Create An Array 

//Array of Emperors

let emperors =  [

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

let randomEmp = "";
let litterisofEmp = "";
let blanks= 0;
let blanksAndCorrect= [];
let incorrectGuess = [];


// VARIABLES TO BE INCREASED, COUNTERS

let victories = 0;
let vanquished = 0;
let attemptsRemain = 10


// FUNCTIONS OF THE GAME 

// STARTING THE GAME

// COMPUTER PULLS RANDOM EMPEROR

function Begin()  {

randomEmp = emperors[Math.floor(Math.random()* emperors.length)];

console.log(randomEmp);

alert(randomEmp);

}



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

// PLAYER GUESSES, CHECK IF RIGHT OR WRONG

function verifyLetters(Letters)  {

  let letterInWord = false;

  for (let i=0; i < blanks; i++) {

    if (randomEmp[i] == letter) {

      letterInWord = true;

    }
  }

  if (letterInWord)  {

    for (let i=0; i < blanks; i++)  {

      if (randomEmp[i] == letter) {

      blanksAndCorrect[i] = letter;

      }
    }
  }

  else {

    incorrectGuess.push(letter);
    attemptsRemain--;


  }

  console.log(blanksAndCorrect);

}

// KEEP GOING UNTIL ATTEMPTS REMAINING = ZERO

// PLAYER EITHER LOSES OR WINS, MODIFY VICTORY OR VANQUISHED DISPLAY

function finish()  {

  //VICTORY+DISPLAY WINS+BEGIN AGAIN

 if (litterisofEmp.toString() == blanksAndCorrect.toString())  {
 victories++;
 beginAnew();
 document.getElementById("victoryrecorder").innerHTML = "" + victories;

}

//VANQUISHED+DISPLAY LOSSES+BEGIN AGAIN

else if (attemptsRemain===0)  {
losses++;
beginAnew();
document.getElementByID("currentEmp").innerHTML = + blanksAndCorrect.join(" ");
document.getElementByID("attemptsRemain").innerHTML = " " + attemptsRemain;

}

}



// RESET+REPEAT 

function beginAnew ()  {
attemptsRemain = 10;
incorrectGuess = [];
blanksAndCorrect = [];

}

//CHECKING INPUT AND CONVERT TO LOWERCASE THEN STORE

Begin();

document.onkeyup = function (event)   {
  var attempts = String.fromCharCode(event.keyCode).toLowerCase();

  //DOES ENTERED ATTEMPT MATCH VALUE OF RANDOM WORD 

  checkLetter(attempts);

  //DO THEY WIN  DO THEY LOSE

  finish();

  //WHAT DID THE PLAYER GUESS

  console.log(attempts);

  //WHAT ATTEMPTS WERE WRONG

  document.getElementById("playerattempts").innerHTML = " " + incorrectLitteris.join(" ");


}









//Use plenty of functions!


//Create underscores based on lengths of words

