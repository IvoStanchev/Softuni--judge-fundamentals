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
  [ ] Write a function that receives two strings ana a delimiter as a parameter
  [ ] Console log the two names with the paramenter between them
*/

function concatenateStrings(stringOne, stringTwo, delimiter) {
	console.log(`${stringOne}${delimiter}${stringTwo}`);
}

concatenateStrings('John', 'Smith', '->');
