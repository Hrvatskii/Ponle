console.log("$$\\      $$\\  $$$$$$\\  $$$$$$$\\  $$$$$$$$\\  $$$$$$\\  ");
console.log("$$$\\    $$$ |$$  __$$\\ $$  __$$\\ $$  _____|$$  __$$\\ ");
console.log("$$$$\\  $$$$ |$$ /  $$ |$$ |  $$ |$$ |      $$ /  \\__|");
console.log("$$\\$$\\$$ $$ |$$$$$$$$ |$$$$$$$  |$$$$$\\    \\$$$$$$\\  ");
console.log("$$ \\$$$  $$ |$$  __$$ |$$  __$$< $$  __|    \\____$$\\ ");
console.log("$$ |\\$  /$$ |$$ |  $$ |$$ |  $$ |$$ |      $$\\   $$ |");
console.log("$$ | \\_/ $$ |$$ |  $$ |$$ |  $$ |$$$$$$$$\\ \\$$$$$$  |");
console.log("\\__|     \\__|\\__|  \\__|\\__|  \\__|\\________| \\______/ ");
console.log("                                                     ");
console.log("                                                     ");
console.log("$$$$$$$\\                                             ");
console.log("$$  __$$\\                                            ");
console.log("$$ |  $$ |                                           ");
console.log("$$$$$$$  |                                           ");
console.log("$$  __$$<                                            ");
console.log("$$ |  $$ |                                           ");
console.log("$$ |  $$ |                                           ");
console.log("\\__|  \\__|                                           ");
console.log("                                                     ");
console.log("                                                     ");
console.log(" $$$$$$\\   $$$$$$\\   $$$$$$\\  $$\\                    ");
console.log("$$  __$$\\ $$  __$$\\ $$  __$$\\ $$ |                   ");
console.log("$$ /  \\__|$$ /  $$ |$$ /  $$ |$$ |                   ");
console.log("$$ |      $$ |  $$ |$$ |  $$ |$$ |                   ");
console.log("$$ |      $$ |  $$ |$$ |  $$ |$$ |                   ");
console.log("$$ |  $$\\ $$ |  $$ |$$ |  $$ |$$ |                   ");
console.log("\\$$$$$$  | $$$$$$  | $$$$$$  |$$$$$$$$\\              ");
console.log(" \\______/  \\______/  \\______/ \\________|             ");
         

// i changed from cookies to localstorage hence the cookie comments


if (localStorage.getItem("wonStats") == null) { // this damn cookie has caused so much pain
  localStorage.setItem("wonStats", [0, 0, 0, 0, 0, 0, 0]);
}

// default setting
let poniesList;
let randomPony;
let hints = true;
var greenColor = 'rgb(36, 156, 78)';
var yellowColor = 'rgb(196, 190, 18)';
var grayColor = "rgb(63, 63, 63)";
document.querySelector(':root').style.setProperty('--green-color', 'rgb(36, 156, 78)');
document.querySelector(':root').style.setProperty('--yellow-color', 'rgb(196, 190, 18)');
document.querySelector(':root').style.setProperty('--gray-color', "rgb(63, 63, 63)");
let completeList = importText('listOfPonies.txt').split(/[\n\r]+/g);
completeList = completeList.map(f=>{ return f.toUpperCase(); });
let a;
let wonStats = localStorage.getItem("wonStats").split(",").map(Number);
let played = localStorage.getItem("played");
let wins = localStorage.getItem("wins");
let currentStreak = localStorage.getItem("currentStreak");
let maxStreak = localStorage.getItem("maxStreak");

// on page load cookie settings thing idk

window.onload = function() {
  // how to play window
  if(localStorage.getItem("howToPlayOpen") == null) {
    document.getElementById('how-to-play-container').style.display = 'flex';
  } else {
    document.getElementById('how-to-play-container').style.display = 'none';
  }
  
  // stats cookies, could probably be improved
  if (localStorage.getItem("wonStats") == null) {
    localStorage.setItem("wonStats", [0, 0, 0, 0, 0, 0, 0])
    wonStats = [0, 0, 0, 0, 0, 0, 0];
  } 
  if (localStorage.getItem("played") == null) {
    localStorage.setItem("played", 0);
    played = 0;
  }
  if (localStorage.getItem("wins") == null) {
    localStorage.setItem("wins", 0);
    wins = 0;
  }
  if (localStorage.getItem("currentStreak") == null) {
    localStorage.setItem("currentStreak", 0);
    currentStreak = 0;
  }
  if (localStorage.getItem("maxStreak") == null) {
    localStorage.setItem("maxStreak", 0);
    maxStreak = 0;
  }
  if (localStorage.getItem("wonRow") == null) {
    localStorage.setItem("wonRow", 8, 1);
  }
  updateStats(localStorage.getItem("wonRow"));

  // options cookies
  if (localStorage.getItem("difficultyOption") == "baby") {
    document.getElementById("baby-mode").checked = true;
    a = importText('babyList.txt').split(/[\n\r]+/g);
    generatePony();
  } else if (localStorage.getItem("difficultyOption") == "extreme") {
    document.getElementById("extreme-mode").checked = true;
    a = importText('listOfPonies.txt').split(/[\n\r]+/g);
    generatePony();
  } else {
    document.getElementById("normal-mode").checked = true;
    a = importText('normalList.txt').split(/[\n\r]+/g);
    generatePony();
  }

  if (localStorage.getItem("hints") == null || localStorage.getItem("hints") == "true") {
    localStorage.setItem("hints", "true");
    document.getElementById('arrow-box').checked = true;
  } else {
    document.getElementById('arrow-box').checked = false;
  }
  console.log(document.cookie)
}



// stats screen logic

function updateStats(wonRow) {
  let wonStatsSum = localStorage.getItem("wonStats").split(",").map(Number).reduce((partialSum, a) => partialSum + a, 0);
  for (let wonStat = 0; wonStat < document.getElementsByClassName('stats-filled').length; wonStat++) {
    document.getElementById(`stats-${wonStat+1}`).innerHTML = `${localStorage.getItem("wonStats").split(",")[wonStat]}`;
    document.getElementById(`stats-${wonStat+1}`).style.minWidth = `${(localStorage.getItem("wonStats").split(",").map(Number)[wonStat]/wonStatsSum) * 300 + 10}px`;
    if (wonStat+1 != wonRow || wonRow == 8) {
      document.getElementById(`stats-${wonStat+1}`).style.backgroundColor = grayColor;
    } else {
      document.getElementById(`stats-${wonStat+1}`).style.backgroundColor = greenColor;
    }
  }
  document.getElementById('played-num').innerHTML = localStorage.getItem("played");
  document.getElementById('current-streak').innerHTML = localStorage.getItem("currentStreak");
  document.getElementById('max-streak').innerHTML = localStorage.getItem("maxStreak");
  if (localStorage.getItem("played") != 0) {
    document.getElementById('win-percent').innerHTML = `${Math.round((parseInt(localStorage.getItem("wins"))/parseInt(localStorage.getItem("played")))*100)}%`;
  }
}


// open/close help menu
// will make it so when you click somewhere that isnt the box it'll also close soon:tm:

document.getElementById('question-mark').onclick = function() {
  document.getElementById('how-to-play-container').style.display = 'flex';
  document.getElementById('options-container').style.display = 'none';
  document.getElementById('stats-container').style.display = 'none';
}

document.getElementById('x-button').onclick = function() {
  document.getElementById('how-to-play-container').style.display = 'none';
  localStorage.setItem("howToPlayOpen", "false");
}

// open/close options menu
document.getElementById('options').onclick = function() {
  document.getElementById('options-container').style.display = 'flex';
  document.getElementById('how-to-play-container').style.display = 'none';
  document.getElementById('stats-container').style.display = 'none';
}

document.getElementById('options-x-button').onclick = function() {
  document.getElementById('options-container').style.display = 'none';
}

// open/close stats menu

document.getElementById('stats').onclick = function() {
  document.getElementById('stats-container').style.display = 'flex';
  document.getElementById('how-to-play-container').style.display = 'none';
  document.getElementById('options-container').style.display = 'none';
  
}

document.getElementById('stats-x-button').onclick = function() {
  document.getElementById('stats-container').style.display = 'none';
}

// buttons

function clear() {
  let keyboardKeys = document.querySelectorAll('.keyboard-key');
  keyboardKeys.forEach(box => {
    box.style.backgroundColor = "rgb(172, 172, 172)";
  })
  document.getElementById("pop-up").style.display = 'none';
  for (let i = 1; i < 7; i++) {
    document.getElementsByClassName('arrow')[i-1].style.opacity = '0';
    let rowWereLookingAt = "row"+i;
    let childAmount = document.getElementById(rowWereLookingAt).childElementCount;
    if (childAmount != 1) {
      for (let j = 1; j < childAmount; j++) {
        document.querySelector(`#${rowWereLookingAt} :nth-child(2)`).remove();
      }
    }
  }
  
  guessRow = 1;
  charIndex = 0;
  hasWon = false;
  rowGuess = "";
  generatePony();
}

//new game

document.getElementById('new-game-button').onclick = function() {
  clear();
  abc123 = true;
  document.getElementById('new-game-button').blur();
  if (document.getElementById('arrow-box').checked) {
    localStorage.setItem("hints", "true");
  } else {
    localStorage.setItem("hints", "false")
  }
  if (localStorage.getItem("hints") == "true") {
    hints = true;
  } else {
    hints = false;
  }
  if (document.getElementById('baby-mode').checked) {
    a = importText('babyList.txt').split(/[\n\r]+/g);
    localStorage.setItem("difficultyOption", "baby");
    generatePony();
  } else if (document.getElementById('normal-mode').checked) {
    a = importText('normalList.txt').split(/[\n\r]+/g);
    localStorage.setItem("difficultyOption", "normal");
    generatePony();
  } else {
    a = importText('listOfPonies.txt').split(/[\n\r]+/g);
    localStorage.setItem("difficultyOption", "extreme");
    generatePony();
  }
}

//give up

document.getElementById('give-up-button').onclick = function() {
  document.getElementById('give-up-button').blur();
  document.getElementById("pop-up").innerHTML = randomPony;
  document.getElementById("pop-up").style.display = 'block';
  hasWon = true;
  wonStats[6]++;
  localStorage.setItem("wonStats", wonStats);
  currentStreak = 0;
  localStorage.setItem("currentStreak", 0);
  played++;
  localStorage.setItem("played", played);
  localStorage.setItem("wonRow", 7, 1);
  updateStats(localStorage.getItem("wonRow"));
}

// clear stats

document.getElementById('clear-stats-button').onclick = function() {
  const holyCookies = ["wonStats", "wins", "currentStreak", "played", "maxStreak", "wonRow"]
  //const holyCookies = ["howToPlayOpen", "difficultyOption", "hints", "dailyWonRowD", "dailyWonStatsD", "dailyWinsD", "dailyCurrentStreakD", "dailyPlayedD", "dailyMaxStreakD", "shareCopy", "tempRow", "dailyRow1", "dailyRow2", "dailyRow3", "dailyRow4", "dailyRow5", "dailyRow6", "hasWon", "guessRow"];
  const iAmSure = confirm("This action cannot be undone. Are you sure that you want to clear your stats? This will only clear stats for the practice mode.");
  if (iAmSure) {
    Object.keys(localStorage).forEach(function(key){
      if (holyCookies.includes(key)) {
        localStorage.removeItem(key);
      }
    });
    window.location.reload();
  }
}



// generate a random pony

function importText(textFile) {
    "use strict";
    var rawFile = new XMLHttpRequest();
    var allText = "";
    rawFile.open("Get", textFile, false);
    rawFile.onreadystatechange = function()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText;
}
function generatePony() {
  poniesList = [];
  
  a.forEach((mare) => {
    poniesList.push(mare.toUpperCase());
  })
  
  randomPony = poniesList[Math.floor(Math.random()*poniesList.length)]; // player will try to guess this

}




// meat and potatoes of the game

let keyName;
let charIndex = 0;
let guessRow = 1;
const ALLOWEDCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ .-1234567890È'ÚÑ";
const NONCHARS = ["ENTER", "BACKSPACE"];
let rowGuess = "";
let currentRow;
let hasWon = false;
let verifying = false;
let abc123 = false;
const MESSAGES = ['You are truly a pony god', 'How many times have you watched the show??', 'You like ponies!', 'Good job', 'Maybe need to rewatch a season', 'Obscure pony, eh'];


function inputKeys() {
  if(!hasWon && !verifying) {
  
    if (ALLOWEDCHARS.includes(keyName) || NONCHARS.includes(keyName)) {
  
      if (!NONCHARS.includes(keyName)) {
        rowGuess += keyName;
        //console.log(rowGuess);
      }
  
      // create a new div element
      const newDiv = document.createElement("div");
  
      // and give it some content
      const newContent = document.createTextNode(keyName);
  
      // add the text node to the newly created div
      newDiv.appendChild(newContent);
      newDiv.classList.add('letter-box')
  
      // add the newly created element and its content into the DOM
      currentRow = "row"+guessRow; //gets the id of the current row we're on
  
  
      switch (keyName) {
        case 'BACKSPACE':
          try {
            if (charIndex >= 1) {
              document.querySelector(`#${currentRow} :nth-child(${charIndex+1})`).remove();
              rowGuess = rowGuess.slice(0, -1)
              charIndex--;
            }
          } catch {
            void(0)
          }
          break;
  
        case 'ENTER':
          if (guessIsValid()) {
            abc123 = false;
            verifying = true;
            if (computeGuess(rowGuess)) {
              hasWon = true;
              localStorage.setItem("wonRow", guessRow, 1);
              wonStats[guessRow-1]++;
              localStorage.setItem("wonStats", wonStats);
              wins++;
              localStorage.setItem("wins", wins);
              currentStreak++;
              localStorage.setItem("currentStreak", currentStreak);
              played++;
              localStorage.setItem("played", played);
              if (currentStreak > maxStreak) {
                maxStreak = currentStreak;
                localStorage.setItem("maxStreak", maxStreak);
              }
              updateStats(localStorage.getItem("wonRow"));
              setTimeout(function() {
                if (!abc123) {
                  document.getElementById("pop-up").innerHTML = MESSAGES[guessRow-1];
                  document.getElementById("pop-up").style.display = 'block';
                }
              }, 150 * (rowGuess.length+1));
            } else {
              if (guessRow == 6) {
                wonStats[6]++;
                localStorage.setItem("wonRow", 7, 1);
                localStorage.setItem("wonStats", wonStats);
                currentStreak = 0;
                localStorage.setItem("currentStreak", 0);
                played++;
                localStorage.setItem("played", played);
                updateStats(localStorage.getItem("wonRow"));
                setTimeout(function() {
                  document.getElementById("pop-up").innerHTML = randomPony;
                  document.getElementById("pop-up").style.display = 'block';
                }, 150 * (rowGuess.length+1));
                hasWon = true;
              } else {
                guessRow++;
              }
              rowGuess = "";
              charIndex = 0;
            }
          } else {
            document.getElementById("pop-up").innerHTML = 'Invalid Guess';
            document.getElementById("pop-up").style.display = 'block';
            setTimeout(() => {
              document.getElementById("pop-up").style.display = 'none';
            }, 2000);
          }
          
          break;
  
        default:
          if (charIndex < 34) {
            charIndex++;
            document.querySelector(`#${currentRow} :nth-child(${charIndex})`).after(newDiv);
          }
  
      }
    }
  }
}

document.addEventListener('keydown', (event) => {
  keyName = event.key.toUpperCase();
  inputKeys();
  

}, false);

// checks if the guess is valid
function guessIsValid() {
  return completeList.includes(rowGuess);
}


function computeGuess(rowGuess) {
  let yellows = randomPony.split('');
  let itSelf = rowGuess.split('');
  var order = [...itSelf];

  // green
  itSelf.forEach((guessedLetter, letterIndex) => {
    if (guessedLetter == yellows[letterIndex]) {
      order[letterIndex] = "G";
      itSelf[letterIndex] = "_";
      yellows[yellows.indexOf(guessedLetter)] = "_";
    }
  })
  
  // yellow
  itSelf.forEach((guessedLetter, letterIndex) => {
    if (guessedLetter != "_") {
      if (yellows.includes(guessedLetter)) {
        order[letterIndex] = "Y";
        itSelf[letterIndex] = "_";
        yellows[yellows.indexOf(guessedLetter)] = "_";
      }
    }
  })

  // gray
  itSelf.forEach((guessedLetter, letterIndex) => {
    if (guessedLetter != "_") {
      order[letterIndex] = "N";
    }
  })

  function loopOverLetters(letter) {

    setTimeout(() => {
      document.querySelector(`#${currentRow} :nth-child(${letter+2})`).style.animation = "spin 0.3s linear";
      setTimeout(() => {
        document.querySelector(`#${currentRow} :nth-child(${letter+2})`).style.animation = "spinBack 0.3s linear";

        // non color style changes to letters in keyboard
        document.querySelector(`#${currentRow} :nth-child(${letter+2})`).style.border = "none";
        document.querySelector(`#${currentRow} :nth-child(${letter+2})`).style.width = "44px";
        document.querySelector(`#${currentRow} :nth-child(${letter+2})`).style.height = "44px";

        // green
        if (order[letter] == "G") {
          document.getElementById(`${rowGuess[letter]}`).style.backgroundColor = greenColor; // on screen keyboard change color
          document.querySelector(`#${currentRow} :nth-child(${letter+2})`).style.backgroundColor = greenColor; // input letters change color
           
        // yellow
        } else if (order[letter] == "Y") {
          if (document.getElementById(`${rowGuess[letter]}`).style.backgroundColor != greenColor) { // on screen keyboard change color
            document.getElementById(`${rowGuess[letter]}`).style.backgroundColor = yellowColor;
          } 
          document.querySelector(`#${currentRow} :nth-child(${letter+2})`).style.backgroundColor = yellowColor; // input letters change color

        // gray
        } else {
          if (document.getElementById(`${rowGuess[letter]}`).style.backgroundColor != greenColor && document.getElementById(`${rowGuess[letter]}`).style.backgroundColor != yellowColor) {
            document.getElementById(`${rowGuess[letter]}`).style.backgroundColor = grayColor; // on screen keyboard change color
          }
          document.querySelector(`#${currentRow} :nth-child(${letter+2})`).style.backgroundColor = grayColor; // input letters change color
        }
      }, 300);
      
    }, 150 * letter);
    
  }


  for (var letter = 0; letter < rowGuess.length; letter++) {
    loopOverLetters(letter);
  }

  setTimeout(() => {
    verifying = false;
  }, 200 * rowGuess.length);
  


  // change direction and opacity of arrow

  if (hints) {
    if (rowGuess.length < randomPony.length) {
      document.querySelector(`#${currentRow} :nth-child(1)`).innerHTML = '<i class="fa-solid fa-arrow-up"></i>'
    } else if (rowGuess.length > randomPony.length) {
      document.querySelector(`#${currentRow} :nth-child(1)`).innerHTML = '<i class="fa-solid fa-arrow-down"></i>'
    } else {
      document.querySelector(`#${currentRow} :nth-child(1)`).innerHTML = '=';
    }
    document.querySelector(`#${currentRow} :nth-child(1)`).style.opacity = '1';
  }
  return rowGuess == randomPony;
}

// on screen keyboard logic

var elements = document.getElementsByClassName("keyboard-key");

var myFunction = function() {
  this.blur();
  keyName = this.getAttribute("data-key");
  inputKeys();
};

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', myFunction, false);
}