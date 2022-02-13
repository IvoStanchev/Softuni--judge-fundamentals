/* 1 Sort Numbers */

function sortNumbers(num1, num2, num3) {
	let arrayOfNumbers = [...arguments];
	let sortedNumbers = arrayOfNumbers.sort((a, b) => b - a);

	for (const numbers of sortedNumbers) {
		console.log(numbers);
	}
}

sortNumbers(-2, 1, 3);

/* 2 English name of the last digit */

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
