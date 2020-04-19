//Create An Array 

//Array of Emperors

const emperors =  [

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

const randomEmp = Math.floor(Math.random() * emperors.length);
const answer =emperors[randomEmp];
const myLength = answer.length;
const display = [myLength];
var win = myLength;
var letters = answer.split('');
var attemptsRemain= 10;
var output= "";
var userLetter;

alert(answer);


var setup = function ()  {

  for (var i=0; i< answer.lengthl i++)

  {
    display[i] = "_";
    output = output+display[i];

  }

  document.getElementById("emperors").innerHTML = output;
  output ="";

}

//Use plenty of functions!

//Choose emperor randomly

//Create underscores based on lengths of words

