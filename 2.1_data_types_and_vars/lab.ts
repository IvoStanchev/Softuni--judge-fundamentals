/* 1. Echo type
[x] Write a function that receives one parameter
[x] Check for the type of that parameter
[x] If the parameter is string or number print its value
[x] else print a predefined string 
*/

function typeChecker(inputParameter: any) {
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

function concatenateStrings(
	stringOne: string,
	stringTwo: string,
	delimiter: string,
) {
	console.log(`${stringOne}${delimiter}${stringTwo}`);
}

concatenateStrings('John', 'Smith', '->');

/* 3. Right place
[x] Create a function that receives three strings as parameters
[x] The first argument of the function contains an underscore that needs to be replaced with the second function argument, which is a character. Replace the underscore and save the modified string
[x] Compare the modified string with the 3rd function argument
[x] Log Matcher or Not Matched depending on wether the strings match or not
*/

function replaceAndCompare(
	stringToModify: string,
	replacementChar: string,
	stringToCompare: string,
) {
	// modify the string by replacing the underscore with the given replacement char
	let modifiedString: string = stringToModify.replace('_', replacementChar);

	// Practice ternary operators
	modifiedString === stringToCompare
		? console.log('Matched')
		: console.log('Not Matched');
}
replaceAndCompare('Str_ng', 'I', 'Strong');
replaceAndCompare('Str_ng', 'i', 'String');

/* 4. Integer or float
[x] Write a function that receives three numbers as parameters
[x] Sum the numbers and store them in a variable
[x] Check if the number is a float or an integer
[x] Print the sum and type of the number
*/

function sumAndType(num1: number, num2: number, num3: number) {
	let sumOfNumbers = num1 + num2 + num3;

	sumOfNumbers % 1 === 0
		? `${sumOfNumbers} - Integer`
		: `${sumOfNumbers} - Float`;

	console.log(sumOfNumbers);
}

sumAndType(9, 100, 1.1);

/* 5. Amazing Numbers

[x] Write a function that receives a number as parameter.
[x] Split the number into separate digits
[x] Calculate the sum of the digits
[x] Check if the final number contains a 9
[x] If yes the number is Amazing else its not
[x] log {number} Amazing? {True or False}
*/

function amazingNumbers(number: number) {
	let sum = 0;
	number
		.toString()
		.split('')
		.forEach((number) => {
			sum += +number;
		});

	let result = sum.toString().includes('9');
	console.log(result ? `${number} Amazing? True` : `${number} Amazing? False`);
}

amazingNumbers(1233);
amazingNumbers(999);

/* 6. Gramophone
[x] Write a function that receives 3 string parameters, bandName, bandAlbum, songName
[x] Calculate the song duration with this formula (albumName.length * bandName.length) * song-name.length / 2
[x] Divide the song duration by 2.5 to find and round up the result. This will find how many times the plate will rotate
[x] Log to the console `The plate was rotated {ROTATIONS} times.`
  */

function gramophone(bandName: string, bandAlbum: string, songName: string) {
	let songDuration = (bandAlbum.length * bandName.length * songName.length) / 2;
	let rotations = Math.ceil(songDuration / 2.5);

	console.log(`The plate was rotated ${rotations} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');

/* 7. Required reading
[x] Write a function that has three parameters, numberOfPages, pagesReadInOneHour, daysToReadTheBook
[x] Calculate the time required to read the book by dividing the number of pages and pages read in one hour, then store that in a variable
[x] Calculate the required time per day to read the book by dividing the total time by daysToReadBook
[x] Console log the result
*/

function requiredReading(
	numberOfPages: number,
	pagesReadInOneHour: number,
	daysToReadTheBook: number,
) {
	let totalTimeToRead = numberOfPages / pagesReadInOneHour;
	let hoursPerDayToRead = totalTimeToRead / daysToReadTheBook;

	console.log(hoursPerDayToRead);
}

requiredReading(432, 15, 4);

/* 8. Centuries to Minutes
[x] Write a function with one parameter, number
[x] The number represents a century that needs to be converted to year days hours and minutes.
[x] Console log '1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes'
*/

function centuriesToMinutes(century: number) {
	let years = century * 100;
	let days = Math.trunc(years * 365.2422);
	let hours = days * 24;
	let minutes = hours * 60;

	console.log(
		`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`,
	);
}

centuriesToMinutes(1);

/* 9. Special numbers
[x] Write a function with one parameter "n"
[x] Create a for loop and print the numbers from one to "n"
[x] Check if the number is 5,7 or 11 and dave the boolean in a variable.
[x] Sum the two digit numbers and check if their sum is 5,7 or 11 and save the result.
[x] Print to the console the numbers and the boolean check
*/

function specialNumbers(number: number) {
	for (let i = 1; i <= number; i++) {
		let isSpecial = 'False';
		let sum = 0;
		sum = i
			.toString()
			.split('')
			.map(Number)
			.reduce(function (a, b) {
				return a + b;
			}, 0);

		if (sum == 5 || sum == 7 || sum == 11) {
			isSpecial = 'True';
		}

		console.log(`${i} -> ${isSpecial}`);
	}
}

specialNumbers(20);

function spacial(num) {
	let temp = 0;
	let check = false;
	let sum = 0;

	for (let i = 1; i <= num; i++) {
		temp = i;
		while (temp !== 0) {
			sum += temp % 10;
			temp = Math.floor(temp / 10);
		}

		if (sum === 5 || sum === 7 || sum === 11) {
			check = true;
			console.log(i + ' -> True');
		} else {
			check = false;
			console.log(i + ' -> False');
		}

		sum = 0;
	}
}

spacial(20);

/* 10. Triples of Latin Letters 
[x] Write a function with one parameter "number"
[x] Create three loops that go over the alphabet.
[x] Each loop should print the number of letters from the alphabet according to the passed function argument
[x] Print the letters concatenated 
*/

function triplesOfLetters(num: number) {
	// Find the charcode of 'a'
	let firstNum = 'a'.charCodeAt(0);

	// Loop the first letter
	for (let firstLetter = 0; firstLetter < num; firstLetter++) {
		console.log(firstLetter);
		//Loop the second letter
		for (let secondLetter = 0; secondLetter < num; secondLetter++) {
			console.log(secondLetter);
			//Loop the third letter
			for (let thirdLetter = 0; thirdLetter < num; thirdLetter++) {
				console.log(firstLetter);
				console.log(secondLetter);
				console.log(thirdLetter);
				let result = String.fromCharCode(
					firstNum + firstLetter,
					firstNum + secondLetter,
					firstNum + thirdLetter,
				);
				console.log(result);
			}
		}
	}
}

triplesOfLetters(3);
