/* 1. Echo type
[x] Write a function that receives one parameter
[x] Check for the type of that parameter
[x] If the parameter is string or number print its value
[x] else print a predefined string 
*/

function typeChecker(inputParameter) {
	let typeOfParameter = typeof inputParameter;

	if (typeOfParameter === 'string' || typeOfParameter === 'number') {
		console.log(typeOfParameter);
		console.log(inputParameter);
	} else {
		console.log(typeOfParameter);
		console.log(`Parameter is not suitable for printing`);
	}
}

/* 2. Concatenate Named 
  [x] Write a function that receives two strings ana a delimiter as a parameter
  [x] Console log the two names with the parameter between them
*/

function concatenateStrings(stringOne, stringTwo, delimiter) {
	console.log(`${stringOne}${delimiter}${stringTwo}`);
}

concatenateStrings('John', 'Smith', '->');

/* 3. Right place
[x] Create a function that receives three strings as parameters
[x] The first argument of the function contains an underscore that needs to be replaced with the second function argument, which is a character. Replace the underscore and save the modified string
[x] Compare the modified string with the 3rd function argument
[x] Log Matcher or Not Matched depending on wether the strings match or not
*/

function replaceAndcompare(stringToModify, replacementChar, stringToCompare) {
	// modify the string by replacing the underscore with the given replacement char
	let modfifiedString = stringToModify.replace('_', replacementChar);

	// Practice ternary operators
	modfifiedString === stringToCompare
		? console.log('Matched')
		: console.log('Not Mached');
}
replaceAndcompare('Str_ng', 'I', 'Strong');
replaceAndcompare('Str_ng', 'i', 'String');
