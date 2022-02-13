/* 1 Sort Numbers */

function sortNumbers(num1, num2, num3) {
	let arrayOfNumbers = [...arguments];
	let sortedNumbers = arrayOfNumbers.sort((a, b) => b - a);

	for (const numbers of sortedNumbers) {
		console.log(numbers);
	}
}

sortNumbers(-2, 1, 3);
