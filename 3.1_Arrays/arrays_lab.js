/* 1. First and last sum
 * [x] Create a function that receives a number
 * [x] Get the first number and store it in an variable
 * [x] Get the last number and store it in a variable
 * [x] Sum the first and last variables and log them to the console
 */

function sumFirstAndLast(arrayOfNumbers) {
	let lastNumber = arrayOfNumbers.pop();
	let firstNumber = arrayOfNumbers.shift();

	console.log(firstNumber + lastNumber);
}

sumFirstAndLast([20, 30, 40]);

/* 2. Day of Week
 * [] Write a function that receives a number
 * [] Create an array holding all days of the Week
 * [] Create a variable holding the requested day. The day can be found with with array index - 1
 * [] Log the day.
 */

function dayOfWeek(dayNumber) {
	let fullWeek = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];

	let requestedDay = fullWeek[dayNumber - 1] || 'Invalid day!';
	console.log(requestedDay);
}

dayOfWeek(8);
