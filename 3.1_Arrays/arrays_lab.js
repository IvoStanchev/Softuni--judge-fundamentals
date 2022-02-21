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

/* 6. Even and Odd subtraction
 * [x] Create a function that receives an array of numbers
 * [x] Create two variables that will hold the even and odd numbers from an array
 * [x] Map over the array and assign the odd and even numbers accordingly
 * [x] Log to the console the subtraction of even and odd.
 */

function evenAndOddSubtraction(arr) {
	let even = 0;
	let odd = 0;
	arr.map((x) => {
		x % 2 === 0 ? (even += x) : (odd += x);
	});
	console.log(even - odd);
}

evenAndOddSubtraction([3, 5, 7, 9]);

/* 7. Equal Arrays
 * [x] create a function that receives two arrays containing strings
 * [x] Loop over one array and compare each of their numbers
 * [x] Collect the sum of all numbers in a variable
 * [x] If all numbers match log the required text and the sum of the arrays
 * [x] If they don't match log the index on which the check failed and end the loop
 *  */

function equalArrays(arr1, arr2) {
	let sum = 0;
	let failedIndex = 0;
	let match = false;

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] === arr2[i]) {
			// Check if the numbers match.
			sum += parseInt(arr1[i]); // Sum the numbers
			match = true;
		} else {
			match = false;
			failedIndex = i; // Store the index on which the numbers differ
			break; // Stop the loop.
		}
	}
	match
		? console.log(`Arrays are identical. Sum: ${sum}`)
		: console.log(
				`Arrays are not identical. Found difference at ${failedIndex} index`,
		  );
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);

/* 8. Condense Array to Numbers
 * [x] Create a function that receives one array
 * [x] Create an array that holds the condensed numbers
 * [x] Create a while loop that runs as long as the original array has more than one
 * [x] Create a for loop that runs for the length of the original array
 * [x] Sum the current array number with the next array number
 * [x] Push the sum in the condensed array
 * [x] In the while loop set the original array to the value of the condensed array
 * [x] Empty the condensed array
 * [x] Print the condensed array.
 */

function condenseArray(arr) {
	let condensed = [];

	while (arr.length > 1) {
		for (let i = 0; i < arr.length - 1; i++) {
			let sum = arr[i] + arr[i + 1];
			condensed.push(sum);
		}
		arr = condensed;
		condensed = [];
	}
	console.log(...arr);
}

condenseArray([2, 10, 3]);
