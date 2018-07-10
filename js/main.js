//WATS 3020 
//Miles Coleman

//variables
let isInteger,
  maxNumber,
  fbResults,
  fbText;

//initial value set to false to trigger prompt 
isInteger = false;

//loops through conditions to check for correct number
while (isInteger == false) {
	let userInput = prompt('Enter a number greater than zero. (And, no decimals please.)'); 
	if (userInput == 0) alert('Invalid input. Please enter a whole number. 🙃'); 
	if (userInput == null) alert('Invalid input. Please enter a whole number. 🙃'); 

	if (userInput.indexOf('.')< 0) {
		maxNumber = Number.parseInt(userInput); 
		isInteger = Number.isSafeInteger(maxNumber) && maxNumber > 0; 
	}
}

//initializes an empty array to be populated by results 
fbResults = [];

//starting with 1, loops through each possible number within the number given by user, checking to see if it is divisible by 3 (fizz) or 5(buzz)
for (let i = 1; i <= maxNumber; i++) {
  let outputString = '';
  if (i % 3 == 0) {
    outputString += 'fizz';
  }
  if (i % 5 == 0) {
    outputString += 'buzz';
  }
  if (i % 23 == 0) {
  	outputString += '_you found an easter egg! 🥚'
  }
  if (outputString.length == 0) {
    outputString = i;
  }
  fbResults.push(outputString);
}

//initialize an empty string for rendering fbResults
fbText = '';

//populates fbText with fbResults to be printed to screen
for (let value of fbResults) {
  	if (value) { 
    fbText += value + '\n';
  }
}

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;