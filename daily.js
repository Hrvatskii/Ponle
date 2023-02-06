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

//console.log(document.cookie)

// i changed from cookies to localstorage hence the cookie comments

/*
WARNING! WARNING! WARNING!
THE ARRAY BELOW CONTAINS THE ANSWERS FOR THE DAILY PONLE
BE CAREFUL AND SCROLL QUICKLY PAST THIS IN ORDER NOT TO GET SPOILED
*/
const ponyList = ['Twilight Sky', 'Flim', 'Big McIntosh', 'Twilight Sparkle', 'Princess Cadance', 'Flam', 'Mrs. Shy', 'Goldie Delicious', 'Cozy Glow', 'Scootaloo', 'Rose', 'Derpy Hooves', 'Princess Celestia', 'Luster Dawn', 'Bon Bon', 'DJ Pon-3', 'Mistmane', 'Pound Cake', 'Sandbar', 'Cherry Berry', 'Amethyst Star', 'Sugar Belle', 'Daring Do', 'Spitfire', 'Mr. Shy', 'Moon Dancer', 'Pipsqueak', 'Pinkie Pie', 'Applejack', 'Minuette', 'Fluttershy', 'Soarin', 'Sweetie Belle', 'Button Mash', 'Limestone Pie', 'Rarity', 'Shining Armor', "Li'l Cheese", 'Trixie Lulamoon', 'Diamond Tiara', 'Marble Pie', 'Featherweight', 'Princess Luna', 'Twinkleshine', 'Lyra Heartstrings', 'Tree Hugger', 'Spoiled Rich', 'Cheerilee', 'Pumpkin Cake', 'Silver Spoon', 'Rainbow Dash', 'Apple Bloom', 'Tempest Shadow', 'Starlight Glimmer', 'Maud Pie', 'Zephyr Breeze', 'Snips', 'Star Swirl the Bearded', 'Sweetie Drops', 'Cheese Sandwich', 'Sassy Saddles', 'Mayor Mare', 'Twilight Velvet', 'Snails', 'Babs Seed', 'Bulk Biceps', 'Twist', 'Sunset Shimmer', 'Dr. Whooves', 'Coco Pommel', 'Lemon Hearts', 'Sunburst', 'Granny Smith', 'King Sombra', 'Octavia Melody', 'Bon Bon', 'Bulk Biceps', 'Spoiled Rich', 'Pumpkin Cake', 'Babs Seed', 'Marble Pie', 'Cozy Glow', 'Pound Cake', 'Mistmane', 'Flim', 'Coco Pommel', 'Cheerilee', 'Luster Dawn', 'Snips', 'Twilight Sky', 'DJ Pon-3', 'Button Mash', "Li'l Cheese", 'Maud Pie', 'Daring Do', 'Twinkleshine', 'Goldie Delicious', 'Tempest Shadow', 'Mr. Shy', 'Snails', 'Apple Bloom', 'Sugar Belle', 'Sunburst', 'Spitfire', 'Mayor Mare', 'Octavia Melody', 'Star Swirl the Bearded', 'Lyra Heartstrings', 'Derpy Hooves', 'Sassy Saddles', 'Moon Dancer', 'Princess Cadance', 'Pinkie Pie', 'Soarin', 'Zephyr Breeze', 'Mrs. Shy', 'Shining Armor', 'Minuette', 'Cherry Berry', 'Princess Celestia', 'King Sombra', 'Scootaloo', 'Amethyst Star', 'Tree Hugger', 'Sunset Shimmer', 'Pipsqueak', 'Dr. Whooves', 'Flam', 'Rose', 'Trixie Lulamoon', 'Sweetie Drops', 'Silver Spoon', 'Twist', 'Sandbar', 'Applejack', 'Twilight Sparkle', 'Sweetie Belle', 'Diamond Tiara', 'Cheese Sandwich', 'Granny Smith', 'Starlight Glimmer', 'Limestone Pie', 'Fluttershy', 'Rarity', 'Featherweight', 'Twilight Velvet', 'Lemon Hearts', 'Rainbow Dash', 'Big McIntosh', 'Princess Luna', 'Sandbar', 'Derpy Hooves', 'Diamond Tiara', 'King Sombra', 'Snips', 'Pumpkin Cake', 'Cheese Sandwich', 'Shining Armor', 'Tempest Shadow', 'Cheerilee', 'Flim', 'Daring Do', 'Marble Pie', 'Amethyst Star', 'Sassy Saddles', 'Sunset Shimmer', 'Babs Seed', "Li'l Cheese", 'Twilight Sparkle', 'Granny Smith', 'Mrs. Shy', 'DJ Pon-3', 'Mayor Mare', 'Coco Pommel', 'Trixie Lulamoon', 'Sugar Belle', 'Bon Bon', 'Snails', 'Maud Pie', 'Featherweight', 'Princess Luna', 'Big McIntosh', 'Octavia Melody', 'Applejack', 'Sunburst', 'Spoiled Rich', 'Mr. Shy', 'Twilight Sky', 'Pipsqueak', 'Lyra Heartstrings', 'Twist', 'Mistmane', 'Princess Cadance', 'Flam', 'Fluttershy', 'Goldie Delicious', 'Star Swirl the Bearded', 'Soarin', 'Sweetie Drops', 'Pinkie Pie', 'Cozy Glow', 'Twinkleshine', 'Luster Dawn', 'Starlight Glimmer', 'Sweetie Belle', 'Minuette', 'Lemon Hearts', 'Twilight Velvet', 'Button Mash', 'Scootaloo', 'Zephyr Breeze', 'Moon Dancer', 'Tree Hugger', 'Rose', 'Rarity', 'Apple Bloom', 'Silver Spoon', 'Limestone Pie', 'Princess Celestia', 'Pound Cake', 'Spitfire', 'Cherry Berry', 'Dr. Whooves', 'Bulk Biceps', 'Rainbow Dash'];

const openingDate = new Date("01/27/2023"); //fucking month day year



let date = new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

let currentDate = new Date(`${month}/${day}/${year}`);
//let currentDate = new Date(`01/28/2023`); // change to which ever date you want to play that daily ponle
let differenceInTime = currentDate.getTime() - openingDate.getTime();

month = month < 10 ? "0" + month : month;
day = day < 10 ? "0" + day : day;

// https://www.educative.io/answers/how-to-create-a-countdown-timer-using-javascript
let countDownDate = new Date(`${year}-${month}-${day}T22:59:59Z`).getTime();

let myfunc = setInterval(function() {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 10 ? "0" + Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)) < 10 ? "0" + Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)) : Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000) < 10 ? "0" + Math.floor((timeleft % (1000 * 60)) / 1000) : Math.floor((timeleft % (1000 * 60)) / 1000);
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  if (timeleft <= 0) {
    setTimeout(() => {
      if (localStorage.getItem("hasWon") != "true") {
        localStorage.setItem("dailyCurrentStreakD", 0);
      }
      window.location.reload();
    }, 2000);
  }
}, 1000)
      
let differenceInDate = Math.round(differenceInTime / (1000 * 3600 * 24));
while (differenceInDate >= ponyList.length) {
  differenceInDate -= ponyList.length + 1;
}

if (localStorage.getItem("dailyWonStatsD") == null) {
  localStorage.setItem("dailyWonStatsD", [0, 0, 0, 0, 0, 0, 0]);
}

if (localStorage.getItem("randomPony") != ponyList[differenceInDate].toUpperCase()) { // checks if a day has passed
  for (let i = 1; i < 7; i++) {
    localStorage.removeItem(`dailyRow${i}`);
  }
  localStorage.setItem("dailyWonRowD", 8);
  localStorage.setItem("hasWon", "false");
  localStorage.setItem("guessRow", 1);
  localStorage.setItem("shareCopy", "");

  if (ponyList[differenceInDate-1].toUpperCase() != localStorage.getItem("randomPony")) {
    localStorage.setItem("dailyCurrentStreakD", 0);
  }
}
updateStats(localStorage.getItem("dailyWonRowD"));

localStorage.setItem("randomPony", ponyList[differenceInDate].toUpperCase());


// default setting
let poniesList;
let randomPony = localStorage.getItem("randomPony");
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
let wonStats;
let played = localStorage.getItem("dailyPlayedD");
let wins = localStorage.getItem("dailyWinsD");
let currentStreak = localStorage.getItem("dailyCurrentStreakD");
let maxStreak = localStorage.getItem("dailyMaxStreakD");
let statPos;
// on page load cookie settings thing idk

window.onload = function() {

  localStorage.setItem("tempRow", `Daily Ponle #${differenceInDate} B/6 _`);
	statPos = localStorage.getItem("tempRow").indexOf("B");
  // how to play window
  if(localStorage.getItem("howToPlayOpen") == null) {
    document.getElementById('how-to-play-container').style.display = 'flex';
  } else {
    document.getElementById('how-to-play-container').style.display = 'none';
  }
  
  // stats cookies, could probably be improved
  if (localStorage.getItem("dailyWonStatsD") == null) {
    localStorage.setItem("dailyWonStatsD", [0, 0, 0, 0, 0, 0, 0])
    wonStats = [0, 0, 0, 0, 0, 0, 0];
  } 
  if (localStorage.getItem("dailyPlayedD") == null) {
    localStorage.setItem("dailyPlayedD", 0);
    played = 0;
  }
  if (localStorage.getItem("dailyWinsD") == null) {
    localStorage.setItem("dailyWinsD", 0);
    wins = 0;
  }
  if (localStorage.getItem("dailyCurrentStreakD") == null) {
    localStorage.setItem("dailyCurrentStreakD", 0);
    currentStreak = 0;
  }
  if (localStorage.getItem("dailyMaxStreakD") == null) {
    localStorage.setItem("dailyMaxStreakD", 0);
    maxStreak = 0;
  }
  if (localStorage.getItem("dailyWonRowD") == null) {
    localStorage.setItem("dailyWonRowD", 8, 1);
  }
  if (localStorage.getItem("guessRow") == null) {
    localStorage.setItem("guessRow", 1);
  }
  if (localStorage.getItem("hasWon") == null) {
    localStorage.setItem("hasWon", "false");
  } else if (localStorage.getItem("hasWon") == "true" && localStorage.getItem("guessRow") == 6) {
    document.getElementById("pop-up").innerHTML = randomPony;
    document.getElementById("pop-up").style.display = 'block';
  }
  if (localStorage.getItem("shareCopy") == null) {
    localStorage.setItem("shareCopy", "");
  }
  updateStats(localStorage.getItem("dailyWonRowD"));

  // options cookies


  if (localStorage.getItem("hints") == null || localStorage.getItem("hints") == "true") {
    localStorage.setItem("hints", "true");
    document.getElementById('arrow-box').checked = true;
  } else {
    document.getElementById('arrow-box').checked = false;
  }

  for (let row = 1; row < 7; row++) {
    if (localStorage.getItem(`dailyRow${row}`) != null) {
      let guessOnTheRow = localStorage.getItem(`dailyRow${row}`);
      let yellows = randomPony.split('');
      let itSelf = guessOnTheRow.split('');
      var order = [...itSelf];
      // below is copy pasted from another section deal with it
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
      for (let letter = 0; letter < guessOnTheRow.length; letter++) {
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode(guessOnTheRow[letter]);
        newDiv.appendChild(newContent);
        newDiv.classList.add('letter-box')
        let currentRow = "row"+row; //gets the id of the current row we're on
        document.querySelector(`#${currentRow} :nth-child(${letter+1})`).after(newDiv);
        changeStuff(currentRow, letter, guessOnTheRow, order)
      }
    }
  }
  
}
wonStats = localStorage.getItem("dailyWonStatsD").split(",").map(Number);



// stats screen logic

function updateStats(wonRow) {
  if (localStorage.getItem("hasWon") == "true") {
    document.getElementById('share-button').style.display = "block";
  } else {
    document.getElementById('share-button').style.display = "none";
  }
  let wonStatsSum = localStorage.getItem("dailyWonStatsD").split(",").map(Number).reduce((partialSum, a) => partialSum + a, 0);
  for (let wonStat = 0; wonStat < document.getElementsByClassName('stats-filled').length; wonStat++) {
    document.getElementById(`stats-${wonStat+1}`).innerHTML = `${localStorage.getItem("dailyWonStatsD").split(",")[wonStat]}`;
    document.getElementById(`stats-${wonStat+1}`).style.minWidth = `${(localStorage.getItem("dailyWonStatsD").split(",").map(Number)[wonStat]/wonStatsSum) * 300 + 10}px`;
    if (wonStat+1 != wonRow || wonRow == 8) {
      document.getElementById(`stats-${wonStat+1}`).style.backgroundColor = grayColor;
    } else {
      document.getElementById(`stats-${wonStat+1}`).style.backgroundColor = greenColor;
    }
  }
  document.getElementById('played-num').innerHTML = localStorage.getItem("dailyPlayedD");
  document.getElementById('current-streak').innerHTML = localStorage.getItem("dailyCurrentStreakD");
  document.getElementById('max-streak').innerHTML = localStorage.getItem("dailyMaxStreakD");
  if (localStorage.getItem("dailyPlayedD") != 0 && localStorage.getItem("dailyPlayedD") != null) {
    document.getElementById('win-percent').innerHTML = `${Math.round((parseInt(localStorage.getItem("dailyWinsD"))/parseInt(localStorage.getItem("dailyPlayedD")))*100)}%`;
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
  if (document.getElementById('arrow-box').checked == true) {
    localStorage.setItem("hints", "true");
  } else {
    localStorage.setItem("hints", "false");
  }
  document.getElementById('options-container').style.display = 'none';
}

// open/close stats menu

document.getElementById('stats').onclick = function() {
  document.getElementById('stats-container').style.display = 'flex';
  document.getElementById('how-to-play-container').style.display = 'none';
  document.getElementById('options-container').style.display = 'none';
  clearTimeout(statsTimeout);
}

document.getElementById('stats-x-button').onclick = function() {
  document.getElementById('stats-container').style.display = 'none';
}


// clear stats remove later
/*
document.getElementById('clear-stats-button').onclick = function() {
  const holyCookies = ["wonStats", "wins", "currentStreak", "played", "maxStreak", "wonRow"]
  //const holyCookies = ["howToPlayOpen", "difficultyOption", "hints", "dailyWonRowD", "dailyWonStatsD", "dailyWinsD", "dailyCurrentStreakD", "dailyPlayedD", "dailyMaxStreakD", "shareCopy", "tempRow", "dailyRow1", "dailyRow2", "dailyRow3", "dailyRow4", "dailyRow5", "dailyRow6", "hasWon", "guessRow"];
  const iAmSure = confirm("This action cannot be undone. Are you sure that you want to clear your stats? This will only clear stats for the practice mode.");
  if (iAmSure) {
    Object.keys(localStorage).forEach(function(key){
			localStorage.removeItem(key);
    });
    window.location.reload();
  }
}
*/


// share

document.getElementById('share-button').onclick = function() {
  let copyVal = localStorage.getItem("shareCopy").split(')').join('\n');
  copyVal = copyVal.split("_").join("\n");
  navigator.clipboard.writeText(copyVal);
  document.getElementById('pop-up').style.display = "block";
  document.getElementById('pop-up').innerHTML = "Copied results to clipboard"
  setTimeout(() => {
    document.getElementById('pop-up').style.display = "none";
  }, 2000);
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

// meat and potatoes of the game

let keyName;
let charIndex = 0;
const ALLOWEDCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ .-1234567890È'ÚÑ";
const NONCHARS = ["ENTER", "BACKSPACE"];
let rowGuess = "";
let currentRow;
let hasWon = false;
let verifying = false;
let abc123 = false;
const MESSAGES = ['You are truly a pony god', 'How many times have you watched the show??', 'You like ponies!', 'Good job', 'Maybe need to rewatch a season', 'Obscure pony, eh'];
let statsTimeout;


function inputKeys() {
  if(localStorage.getItem("hasWon") == "false" && !verifying) {
  
    if (ALLOWEDCHARS.includes(keyName) || NONCHARS.includes(keyName)) {
  
      if (!NONCHARS.includes(keyName)) {
        rowGuess += keyName;
        //console.log(rowGuess);
      }
  
      // honestly no clue how this works but i stole it from somewhere
      const newDiv = document.createElement("div");
      const newContent = document.createTextNode(keyName);
      newDiv.appendChild(newContent);
      newDiv.classList.add('letter-box')
      let ababaRow = localStorage.getItem("guessRow"); // i think this is panic coding
      currentRow = `row${ababaRow}`; //gets the id of the current row we're on
  
  
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
            localStorage.setItem(`dailyRow${localStorage.getItem("guessRow")}`, rowGuess);
            if (computeGuess(rowGuess)) {
              statsTimeout = setTimeout(function() {
                document.getElementById('stats-container').style.display = "flex";
                clearTimeout(statsTimeout);
              },200*randomPony.length + 2000);
              localStorage.setItem("hasWon", "true");
              localStorage.setItem("dailyWonRowD", localStorage.getItem("guessRow"), 1);
              wonStats[localStorage.getItem("guessRow")-1]++;
              localStorage.setItem("dailyWonStatsD", wonStats);
              wins++;
              localStorage.setItem("dailyWinsD", wins);
              currentStreak++;
              localStorage.setItem("dailyCurrentStreakD", currentStreak);
              played++;
              localStorage.setItem("dailyPlayedD", played);
              if (currentStreak > maxStreak) {
                maxStreak = currentStreak;
                localStorage.setItem("dailyMaxStreakD", maxStreak);
              }
              updateStats(localStorage.getItem("dailyWonRowD"));
              setTimeout(function() {
                if (!abc123) {
                  document.getElementById("pop-up").innerHTML = MESSAGES[localStorage.getItem("guessRow")-1];
                  document.getElementById("pop-up").style.display = 'block';
                }
              }, 150 * (rowGuess.length+1));
            } else {
              if (localStorage.getItem("guessRow") == 6) {
                setTimeout(function() {
                  document.getElementById('stats-container').style.display = "flex";
                }, 2000);
                localStorage.setItem("hasWon", "true");
                wonStats[6]++;
                localStorage.setItem("dailyWonRowD", 7, 1);
                localStorage.setItem("dailyWonStatsD", wonStats);
                currentStreak = 0;
                localStorage.setItem("dailyCurrentStreakD", 0);
                played++;
                localStorage.setItem("dailyPlayedD", played);
                updateStats(localStorage.getItem("dailyWonRowD"));
                setTimeout(function() {
                  document.getElementById("pop-up").innerHTML = randomPony;
                  document.getElementById("pop-up").style.display = 'block';
                }, 150 * (rowGuess.length+1));
              } else {
                localStorage.setItem("guessRow", parseInt(localStorage.getItem("guessRow"))+1);
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
        changeStuff(currentRow, letter, rowGuess, order);
        if (letter == rowGuess.length-1) {
          let tempRowVal = localStorage.getItem("tempRow");
          tempRowVal += ")"; //15
					
          let firstPart = tempRowVal.substr(0, statPos);
          let lastPart = tempRowVal.substr(statPos + 1);
          let newTempRow;
          if (localStorage.getItem("dailyWonRowD") != 7) {
            newTempRow = firstPart + localStorage.getItem("guessRow") + lastPart;
          } else {
            newTempRow = firstPart + "X" + lastPart;
          }
					console.log(newTempRow);
         // newTempRow = newTempRow.split(')').join(')');
          localStorage.setItem("shareCopy", newTempRow);
          localStorage.setItem("tempRow", newTempRow);
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
  

  return rowGuess == randomPony;
}

function changeStuff(currentRow, letter, rowGuess, order) { // this function changes stuff.
  // non color style changes to letters in keyboard
  document.querySelector(`#${currentRow} :nth-child(${letter+2})`).style.border = "none";
  document.querySelector(`#${currentRow} :nth-child(${letter+2})`).style.width = "44px";
  document.querySelector(`#${currentRow} :nth-child(${letter+2})`).style.height = "44px";

  if (letter == 0) {
    let tempTempRow = localStorage.getItem("tempRow");
    if (tempTempRow[tempTempRow.length-1] != ")") {
      tempTempRow += ")";
      localStorage.setItem("tempRow", tempTempRow);
    }
  }

  // green
  if (order[letter] == "G") {
    let tempTempRow = localStorage.getItem("tempRow");
    tempTempRow += "🟩";
    localStorage.setItem("tempRow", tempTempRow);
    document.getElementById(`${rowGuess[letter]}`).style.backgroundColor = greenColor; // on screen keyboard change color
    document.querySelector(`#${currentRow} :nth-child(${letter+2})`).style.backgroundColor = greenColor; // input letters change color
     
  // yellow
  } else if (order[letter] == "Y") {
    let tempTempRow = localStorage.getItem("tempRow");
    tempTempRow += "🟨";
    localStorage.setItem("tempRow", tempTempRow);
    if (document.getElementById(`${rowGuess[letter]}`).style.backgroundColor != greenColor) { // on screen keyboard change color
      document.getElementById(`${rowGuess[letter]}`).style.backgroundColor = yellowColor;
    } 
    document.querySelector(`#${currentRow} :nth-child(${letter+2})`).style.backgroundColor = yellowColor; // input letters change color

  // gray
  } else {
    let tempTempRow = localStorage.getItem("tempRow");
    tempTempRow += "⬛";
    localStorage.setItem("tempRow", tempTempRow);
    if (document.getElementById(`${rowGuess[letter]}`).style.backgroundColor != greenColor && document.getElementById(`${rowGuess[letter]}`).style.backgroundColor != yellowColor) {
      document.getElementById(`${rowGuess[letter]}`).style.backgroundColor = grayColor; // on screen keyboard change color
    }
    document.querySelector(`#${currentRow} :nth-child(${letter+2})`).style.backgroundColor = grayColor; // input letters change color
  }


  // change direction and opacity of arrow

  if (localStorage.getItem("hints") == "true") {
    if (rowGuess.length < randomPony.length) {
      document.querySelector(`#${currentRow} :nth-child(1)`).innerHTML = '<i class="fa-solid fa-arrow-up"></i>'
    } else if (rowGuess.length > randomPony.length) {
      document.querySelector(`#${currentRow} :nth-child(1)`).innerHTML = '<i class="fa-solid fa-arrow-down"></i>'
    } else {
      document.querySelector(`#${currentRow} :nth-child(1)`).innerHTML = '=';
    }
    document.querySelector(`#${currentRow} :nth-child(1)`).style.opacity = '1';
  }
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