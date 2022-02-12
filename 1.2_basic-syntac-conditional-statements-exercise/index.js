/* 1. Ages */

function ages(age) {
	if (age >= 0 && age <= 2) {
		console.log('baby');
	} else if (age >= 3 && age <= 13) {
		console.log('child');
	} else if (age >= 14 && age <= 19) {
		console.log('teenager');
	} else if (age >= 20 && age <= 65) {
		console.log('adult');
	} else if (age >= 66) {
		console.log('elder');
	} else {
		console.log('out of bounds');
	}
}

/* 2. Rounding */

function roundNumbers(number, decimel) {
	if (decimel > 15) {
		decimel = 15;
	}
	console.log(parseFloat(number.toFixed(decimel)));
}

/*3. Division*/

function isDivisible(n) {
	let allDivisions = [];
	for (let i = 0; i <= 10; i++) {
		if (n % i == 0 && i != 5 && i != 1 && i != 4 && i != 8 && i != 9) {
			allDivisions.push(i);
		}
	}
	if (allDivisions.length === 0) {
		console.log('Not divisible');
	} else {
		console.log(`The number is divisible by ${allDivisions.pop()}`);
	}
}

isDivisible(16);

/*4. Vacation.

[x] Create a function that will return the correct pricing based on the type of group
[x] Create a check for the type of day and assign the correct pricing for that day
[x] Calculate the pricing for the entire group
[x] Calculate discount if group matches the requirements
[x] Print the price to the console
 
** Total price: {price} -> the price should be formated toFixed(2) 

*/

function vacation(groupOfPeople, typeOfGroup, dayOfWeek) {
	//Declare all pricing related variables.
	let fridayPrice = 0;
	let saturdayPrice = 0;
	let sundayPrice = 0;
	let total = 0;

	//Switch the price based on the type of group and assign the correct price to each price variable.
	switch (typeOfGroup) {
		case 'Students':
			if (groupOfPeople >= 30) {
				//Check if the students are more than 30 and apply a discount
				fridayPrice = 8.45 - 8.45 * 0.15;
				saturdayPrice = 9.8 - 9.8 * 0.15;
				sundayPrice = 10.46 - 10.46 * 0.15;
			} else {
				fridayPrice = 8.45;
				saturdayPrice = 9.8;
				sundayPrice = 10.46;
			}

			break;
		case 'Business':
			if (groupOfPeople >= 100) {
				// Check if business clients are more that 100 as 10 should be staying for free so we deduct 10 people from the group.
				groupOfPeople -= 10;
			}
			fridayPrice = 10.9;
			saturdayPrice = 15.6;
			sundayPrice = 16;
			break;
		case 'Regular':
			if (groupOfPeople >= 10 && groupOfPeople <= 20) {
				// Check if regular clients are above 10 and below 20, if so apply a 5% discount.
				fridayPrice = 15 - 15 * 0.05;
				saturdayPrice = 20 - 20 * 0.05;
				sundayPrice = 22.5 - 22.5 * 0.05;
			} else {
				fridayPrice = 15;
				saturdayPrice = 20;
				sundayPrice = 22.5;
			}
			break;
		default:
			break;
	}

	// Check the day and calculate the total pricing.
	if (dayOfWeek == 'Friday') {
		total = fridayPrice * groupOfPeople;
	} else if (dayOfWeek == 'Saturday') {
		total = saturdayPrice * groupOfPeople;
	} else if (dayOfWeek == 'Sunday') {
		total = sundayPrice * groupOfPeople;
	}

	console.log(`Total price: ${total.toFixed(2)}`);
}

vacation(40, 'Regular', 'Saturday');

/* 5. Leap year 

[x] Write a function that receives a year
[x] Check if the year is divisible by 4 but not by 100 or is divisible by 400
[x] Print 'yes' or 'no' depending on wether the year is leap or not 
*/

function leapYear(year) {
	if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
		console.log('yes');
	} else {
		console.log('no');
	}
}

leapYear(4);

/* 6. Print and sum 

[x] Write a function that receive two number arguments
[x] Create a for loop to iterate from the first(start) number to the second(end) number.
[x] Create two variables outside the scope of the loop to hold all numbers and their sum
[x] Sum each number in the sum variable 
[x] Print all numbers from start to end and their sum in the following format, make sure to trim() them
		1,2,3,4,5
		Sum: 15
*/

function printAndSum(startNumber, endNumber) {
	let sum = 0;
	let allNumbers = '';
	for (let i = startNumber; i <= endNumber; i++) {
		sum += i;
		allNumbers += i + ' ';
	}

	console.log(`${allNumbers.trim()}\nSum: ${sum}`);
}

printAndSum(50, 60);

/* 7. Triangle of Numbers 

[x] Create a function that receives a single number n
[x] Check if n is between 1 - 20
[x] Create a forloop that iterates from 1 to n and repeats each iteration n times on the same line
[x] Print the result to the console
*/

function triangleOfNumbers(n) {
	for (let i = 1; i <= n; i++) {
		if (n >= 1 && n <= 20) {
			console.log((i + ' ').toString().repeat(i));
		}
	}
}

triangleOfNumbers(10);
/* 08. Multiplication Table

[x] Write a function that receives a number
[x] Write a for loop that loops 10 times over the number, multiplying it by the current iteration
[ ] Print the result to the console in the form of a multiplicaiton table.
*/

function multiplicationTable(number) {
	for (let i = 1; i <= 10; i++) {
		console.log(number + ' X ' + i + ' = ' + number * i);
	}
}

multiplicationTable(5);

/* 09. Login 

[x] Write a function that receives an array of strings
[x] Save the password in a variable by reversing the 1st string in the array.
[x] Create a counter for number of login attempts.
[x] Loop over the array and compare each string from the array, starting from the 1st index to the password
[x] Create check for login attempts.
  => If it matches in three attempts, login user
	=> If it takes more thatn three attempts, block the user and return correct message
*/

function login(userInformation) {
	let user = userInformation[0];
	let password = user.split('').reverse().join('');
	let loginAttempts = 0;

	for (let i = 1; i < userInformation.length; i++) {
		if (userInformation[i] === password) {
			console.log(`User ${user} logged in.`);
		} else {
			loginAttempts += 1;
			if (loginAttempts >= 4) {
				console.log(`User ${user} blocked!`);
			} else {
				console.log(`Incorrect password. Try again.`);
			}
		}
	}
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
