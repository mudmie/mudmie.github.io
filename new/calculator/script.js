var buttonOperators = {
		"+": "badd", 
		"-": "bmin", 
		"*": "bmul", 
		"/": "bdiv"};
var buttonNumbers = ["b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
var buttonMemories = ["bmrc", "bmneg", "bmplus"];
var level;
var numbers;
var hasBeenCrossedOut = [];
var memory = 0;
var interval;

function begin() {
	var splash;
	splash = document.getElementById("splash");
	splash.classList.add("hidden");

	var levelSelection = document.getElementById("level");
	level = parseInt(levelSelection.value);
	levelName = levelSelection.selectedOptions[0].text;

	displayLevel(levelName);
	switch(level) {
		case 1: 
		startTimer (2 * 60);
		break;
		case 2:
		case 3:
		case 4:
		startTimer(3 * 60);
		break; 
	}
	
	// Change values based on the selected level
	randomSolution();
	displayNumber();
	var activeButtons = getActiveButtons(level);
	showActiveButtons(activeButtons);
}

function toggle(elementId) {
	var showMessage = document.getElementById(elementId);
	if (showMessage.classList.contains("hide")) {
		showMessage.classList.add("show");
		showMessage.classList.remove("hide");
	} else {
		showMessage.classList.remove("show");
		showMessage.classList.add("hide");
	}
}

function reloadSplash() {
	location.reload();
}

function displayLevel (level) {
	var showLevel = document.getElementById("showLevel");
	showLevel.innerHTML = level; 

}

//source: http://stackoverflow.com/questions/20618355/
//the-simplest-possible-javascript-countdown-timer
function startTimer(duration) {
	var display = document.getElementById("timerBox");
    var timer = duration, minutes, seconds;
    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            endGame(false);
        }
    }, 1000);
}

function stopTimer() {
	clearInterval(interval);
}

function randomSolution() {
	var arrayOfRandomNumbers = []
	while(arrayOfRandomNumbers.length < 8){
  var randomnumber = Math.round(Math.random() * 100)
  var foundSameNumber = false;
  for(var i = 0; i<arrayOfRandomNumbers.length; i++){
	if(arrayOfRandomNumbers[i] == randomnumber)
		{foundSameNumber = true;break}
  }
  if(!foundSameNumber)arrayOfRandomNumbers[arrayOfRandomNumbers.length]=randomnumber;
	}
	numbers = arrayOfRandomNumbers.sort(sortNumber);
}

function displayNumber () {
	var numberBox = document.getElementById("numberBox");
	numberBox.innerHTML = "";	

	var ul = document.createElement("ul");
	numberBox.appendChild(ul);
	for (var i = 0; i < numbers.length; i++) {
		var item = document.createElement("li");
		item.id = "number" + numbers[i];
		item.innerHTML = numbers[i];
		ul.appendChild(item);
	}
}

function sortNumber(a, b) {
	return a - b;
}

function addToCalc(value) {
	 document.getElementById("d").value += value;
}

function output(specialButton) {
	document.getElementById("d").value = specialButton;
}

function calculate() {
	try{
		var result = eval(document.getElementById("d").value);
		output(result);
		checkResult(result);
		return result;
	} catch(e) {
		output("Error")
	}
}

function memoryAdd() {
	var valueToAdd = calculate();
	memory += valueToAdd;
	output(memory);
	checkResult(memory);
}
function memorySubtract() {
	var valueToSubtract = calculate();
	memory -= valueToSubtract;
	output(memory);
	checkResult(memory);
}
function memoryClear() {
	addToCalc(memory);
	memory = 0;
}

function checkResult(result) {
	var indexFound = -1;
	for (var i = 0; i < numbers.length; i++) {
		if (result == numbers[i]) {
			indexFound = i;
			break;
		}
	}
	if (indexFound != -1) {
		// Found a match to the goal
		var itemToCrossOut = document.getElementById("number" + result);
		itemToCrossOut.classList.add("crossed");

		hasBeenCrossedOut[indexFound] = true;

		if (hasWon() == true) {
			endGame(true);
		}
	}
}

function getActiveButtons(level) {
	var activeButtons = [];
	switch (level) {
		case 1: 
			activeButtons.push(buttonNumbers[1]);
			activeButtons.push(buttonNumbers[5]);
			activeButtons.push(buttonNumbers[2]);
			activeButtons.push(buttonNumbers[3]);
			activeButtons.push(buttonOperators["+"]);
			activeButtons.push(buttonOperators["*"]);
			activeButtons.push(buttonOperators["/"]);
			activeButtons.push(buttonOperators["-"]);
			break;
		case 2:
			activeButtons.push(buttonNumbers[1]);
			activeButtons.push(buttonNumbers[4]);
			activeButtons.push(buttonNumbers[7]);
			activeButtons.push(buttonOperators["+"]);
			activeButtons.push(buttonOperators["*"]);
			activeButtons.push(buttonOperators["-"]);
			break;
		case 3:
			activeButtons.push(buttonNumbers[1]);
			activeButtons.push(buttonNumbers[6]);
			activeButtons.push(buttonNumbers[9]);
			activeButtons.push(buttonOperators["-"]);
			activeButtons.push(buttonOperators["*"]);
			break;
		case 4:
			activeButtons.push(buttonNumbers[1]);
			activeButtons.push(buttonNumbers[8]);
			activeButtons.push(buttonNumbers[3]);
			activeButtons.push(buttonOperators["/"]);
			activeButtons.push(buttonOperators["-"]);
			activeButtons.push(buttonOperators["*"]);
			break;	
	}

	// Buttons that will always be there
	activeButtons.push("bdot");
	activeButtons.push("bclear");
	activeButtons.push("beql");
	activeButtons.push("bmrc");
	activeButtons.push("bmplus");
	activeButtons.push("bmneg");

	return activeButtons;
}

function showActiveButtons(activeButtons) {
	var container = document.getElementById("keys");
	var buttons = container.getElementsByClassName("button");

	// Hide all buttons by marking them inactive
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove("active");
	}

	for (var i = 0; i < activeButtons.length; i++) {
		var button = document.getElementById(activeButtons[i]);
		button.classList.add("active");
	}
}

function hasWon() {
	for(var i = 0; i < numbers.length; i++) {
		if (!hasBeenCrossedOut[i]) {
			return false;
		}
	}
	return true;
}

function endGame(hasWon) {
	stopTimer();
	if (hasWon) {
		var winningScreen = document.getElementById("winningScreen");
		winningScreen.classList.remove("hidden");
		var audio = document.getElementById("winningAudio");
		audio.play();
	} else {
		var losingScreen = document.getElementById("losingScreen");
		losingScreen.classList.remove("hidden");
		}
	}
