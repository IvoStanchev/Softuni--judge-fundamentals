// 01. Multiply Number by 2

function solve(num) {
	console.log(num * 2);
}

// 02. Student Information

function printStudentInfo(name, age, grade) {
	console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

// 03. Excellent grade

function gradeChecker(grade) {
	if (grade >= 5.5) {
		console.log('Excellent');
	} else {
		console.log('Not excellent');
	}
}

// 04. Foreign Languages

function languageCountryIdentifyer(country) {
	switch (country) {
		case 'England':
		case 'USA':
			console.log('English');
			break;
		case 'Spain':
		case 'Argentina':
		case 'Mexico':
			console.log('Spanish');
			break;
		default:
			console.log('unknown');
	}
}

// 05. Month Printer

function printMonth(number) {
	let months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	if (number <= 12 && number >= 1) {
		console.log(months[number - 1]);
	} else {
		console.log('Error!');
	}
}

// 06. Theatre Promotions

function priceCalculator(typeOfDay, ageOfPerson) {
	let price = 0;

	if (0 <= ageOfPerson && ageOfPerson <= 18) {
		priceSwitcher(typeOfDay, 12, 15, 5);
	} else if (18 < ageOfPerson && ageOfPerson <= 64) {
		priceSwitcher(typeOfDay, 18, 20, 12);
	} else if (64 < ageOfPerson && ageOfPerson <= 122) {
		priceSwitcher(typeOfDay, 12, 15, 10);
	} else {
		console.log('Error!');
	}

	function priceSwitcher(typeOfDay, weekdayPrice, weekendPrice, holidayPrice) {
		switch (typeOfDay) {
			case 'Weekday':
				price = weekdayPrice;
				break;
			case 'Weekend':
				price = weekendPrice;
				break;
			case 'Holiday':
				price = holidayPrice;
				break;
			default:
				break;
		}
		console.log(price + '$');
	}
}

// 07. Numbers from 1 to 5

function printNumbers() {
	for (let i = 1; i <= 5; i++) {
		console.log(i);
	}
}

// 08. Divisible by 3

function printDivisibleNumbers() {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 == 0) {
			console.log(i);
		}
	}
}

// 09. Numbers from N to 1

function fromNumberToOne(num) {
	for (let i = num; i >= 1; i--) {
		console.log(i);
	}
}

function solve(num) {
	while (num >= 1) {
		console.log(num--);
	}
}

// 10. Numbers from M to N

function fromMtoN(M, N) {
	while (M >= N) {
		console.log(M--);
	}
}

// 11. Sum of Odd Numbers

function printOddNumbers(countOfoddNumbers) {
	let sum = 0;
	for (let i = 0; i < countOfoddNumbers * 2; i++) {
		if (i % 2 !== 0) {
			console.log(i);
			sum += i;
		}
	}
	console.log(`Sum: ${sum}`);
}

printOddNumbers(5);
