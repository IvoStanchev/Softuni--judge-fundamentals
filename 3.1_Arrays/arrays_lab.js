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
 * [x] Write a function that receives a number
 * [x] Create an array holding all days of the Week
 * [x] Create a variable holding the requested day. The day can be found with with array index - 1
 * [x] Log the day.
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

/* 3. Reverse an Array of Numbers
 * [x] Create a function that receives an array and a number
 * [x] Create a new array to hold the reversed one.
 * [x] Splice the first N number of items
 * [x] Initiate a for loop and push the items in the new one in reverse order.
 * [x] Log the result
 */

function reverseAndShorten(index, arr) {
	let reversedArray = [];
	let numberOfItemsToReverse = arr.splice(0, index);

	for (let i = numberOfItemsToReverse.length - 1; i >= 0; i--) {
		reversedArray.push(numberOfItemsToReverse[i]);
	}

	console.log(reversedArray.toString().split(',').join(' '));
}

reverseAndShorten(4, [-1, 20, 99, 5]);

/* 4. Reverse In Place
 * [x] Create a function that receives an array
 * [x] Create a variable that will hold the result string
 * [x] Create a for loop that starts from the length of the array and loops backwards
 * [x] Add the values to the result string with string interpolation and a space, trim the result and log it to the console.
 */

function reverseArray(arr) {
	let output = '';
	for (let i = arr.length - 1; i >= 0; i--) {
		output += `${arr[i]} `;
	}
	console.log(output.trim());
}

reverseArray(['a', 'b', 'c', 'd', 'e']);

/* 5 Sum even numbers
 * [x] Create a function that receives and array of numbers
 * [x] Reduce the array by returning the sum of only the even numbers
 * [x] Log the result to the console
 */

function sumEvenNumbers(arr) {
	let result = arr.reduce((result, number) => {
		number % 2 == 0 ? (result += parseInt(number)) : result;
		return result;
	}, 0);

	console.log(result);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);

/* 6. Even and Odd subtraction */
