/* 1. Echo type
[ ] Write a function that receives one parameter
[ ] Check for the type of that parameter
[ ] If the parameter is string or number print its value
[ ] else print a predefined string 
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
