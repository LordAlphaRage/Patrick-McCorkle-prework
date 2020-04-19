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

let answer = ''; 

let MaxMistakes = 5;

let Mistakes = 0;

let guessed = [];

let wordStatus = null;

function randomEmp()  {
    
answer = emperors[Math.floor(Math.random() * emperors.length)];

}

function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `
        <button
          class="btn btn-lg btn-danger m-2"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
  }

randomEmp();

generateButtons();