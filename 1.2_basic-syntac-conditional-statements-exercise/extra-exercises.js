/* 1. Sort Numbers

[x] Create a function that receives three numbers as arguments
[x] Store the arguments as array 
[x] Sort the array using the sort function and store the sorted array in a variable
[x] Loop over the array and log each number on a new line*/

function sortNumbers(num1, num2, num3) {
	let arrayOfNumbers = [...arguments];
	let sortedNumbers = arrayOfNumbers.sort((a, b) => b - a);

	for (const numbers of sortedNumbers) {
		console.log(numbers);
	}
}

sortNumbers(-2, 1, 3);

/* 2. English name of the last digit 

[x] Create a function that receives a number
[x] Store all english names from 0 to 9 in a object
[x] Store the last digit from the received number in a variable
[x] Loop over the numbers object and check if the key matches the last digit, print the value of that key.
*/

function numberToEnglish(numberToTransform) {
	const numbers = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
	};
	const lastDigit = numberToTransform.toString().split('').pop();
	for (const key in numbers) {
		if (key === lastDigit) {
			console.log(numbers[key]);
		}
	}
}

numberToEnglish(2423);

/* 3. Next day 

[ ] Create a function that receives three numbers, year, month and date
[ ] Construct a new date with the Date constructor, the constructor should take the fucntion input as arguments
[ ] Use the built in setDate method to increment the date by one
[ ] Console log the result
*/

function nextDay(year, month, day) {
	const testDate = new Date(`${year}-${month}-${day}`);

	testDate.setDate(testDate.getDate() + 1);

	const nextDate = testDate.toLocaleString().split(',')[0].split('/').reverse();
	console.log(`${nextDate[0]}-${nextDate[2]}-${nextDate[1]}`);
}

nextDay(1, 1, 1);

/* 4. Reverse a string

[ ] Write a funciton that receives a string
[ ] Save the string in a variable, use split() then reverse() then join()
[ ] Console log the reversed string
*/

function reverseString(string) {
	let reversed = string.toString().split('').reverse().join('');
	console.log(reversed);
}

reverseString(1234);
