//What are at least two different types of data (values) you know?
	//Strings and Numbers

//Write an expression in the console to evaluate the percentage of people in class who are wearing glasses today.
	//So we are pretending there are 7 people wearing glasses in class with a total of 35 students
	// (7 / 35) * 100;


//=============What's wrong with this function?
//==Cube Missing parens, mising bracket, the 'y' should have been an x 

function cube (x) {
	
return x * x * x;

}

//===========A polynomial is a mathematical expression consisting of a sum of terms, each term including a variable or variables raised to a power and multiplied by a coefficient.  
//==Slides showing how they are the same http://www.slideshare.net/fresherssite/why-is-ab2-a2b22ab
//===========lhs solution

function lhs (a, b){
	return (a + b) * (a + b);
}

console.log('lhs: ', lhs(6,6));
//===========rhs solution

function rhs (a,b){
	return (a * a) + ( 2  * ( a  * b ) ) + (b * b);
}

console.log('rhs: ', rhs(6,6));

//lhs and rhs both return 144, so yes they produce the same result.

//===========================================================Old enough to drink
//4
function oldEnough (age){
	if(age >= 21){
		return true;
	}
	return false;
}

//5
//==========================================================String same length?

function sameLength(string1, string2){
	if(string1.length === string2.length){
		return true;
	}
	return false
}

//6
//===========================================================Password long enough

function passwordLongEnough (password){
	if(password.length > 5){
		return true
	}
	else return false;
}

//Conditionals If:
// Write a function bouncer that accepts a person's name and age as arguments, and returns either "Go home, .", or "Welcome, !" depending on whether or not the person is old enough to drink.

// Write a function max that takes two numbers as arguments, and returns the larger one.

// Write a function min that takes two numbers as arguments, and returns the smaller one.

// Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively.
//1
function bouncer(name, age){
	if(age > 21){
		return 'Welcome, ' + name + '!';
	} else {
		'Go home, ' + name + '.';
	}
}

//2
function max(num1, num2){
	if(num1 > num2){
		return num1;
	} else {
		return num2;
	}
}

//3
function min(num1, num2){
	if(num1 < num2){
		return num1;
	} else {
		return num2;
	}
}

//4
function larger(str1, str2){
	if(str1 > str2){
		return str1;
	} else {
		return str2;
	}
}

function smaller(str1, str2){
	if(str1 < str2){
		return str1;
	} else {
		return str2;
	}
}
//==========================More Pratice

//3
//this also incoporates the advance instructions from the second set of exercises on day 2
function randInt (n){
	return Math.random() * (n - 1);
}

function guessMyNumber (num){
	var randomNum = Math.floor(Math.random() * 5)
	if(num > 5){
		return "Your guess is out of bounds! Please guess between 0-5";
	}
	if(num ===  randomNum){
		return "You guessed my number!";
	}
	console.log('RandomNum: ', randomNum);
	return "Nope! That wasn't it!";
}


//============================================================================= !<---- unary or binary?
// It is unary, here is a table http://www.codingunit.com/unary-and-binary-operator-table
	//A binary operator has two values it works with x + x binary
	//A unary operator has only one
	// !false unary example

//4
// Translate each sentence into code:

// "Either it is warm today, or it is cold today."
	//"Either it is warm today" || "it is cold today."

// "That dog is either a french bulldog or a boston terrier."
	//"That dog is either a french bulldog" || "a boston terrier."

//6
// Translate each sentence into code:

// "It is cold and raining outside."
	//"it is cold" && "raining outside."
	
// "That cat is hissing and growling."
	//"That cat is hissing" && "growling."

	//=================================================================================bar bouncer function
	//this incorporates rules from the advance section

	function bouncer (age, name, day){
		if(age >= 21 && name !== 'Joe' && 'Friday' === day || day === 'Saturday'){
			return 'You recieved a bracelet!';
		}else if( age < 21 && day === 'Friday' || day === 'Saturday'){
			return 'Welcom in youngster!';
		}else if(age >= 21 && name !== 'Joe'){
			return 'Welcome!'
		} else if (age < 21 || name === 'Joe'){
			return 'Get outta here!';
		}
	}

//=====================================================================================scoreToGrade
//this is the completed functions following the instruction from the advance section
function letterGrade (letter, score) {
	if(score === 100){
		return letter + '+';
	}
	
	score = score % 10;

	if(score >= 0 && score <= 2){
		return letter + '-'; //======> A-
	} else if( score >= 3 && score <= 7){
		return letter;
	} else if( score >= 8 && score <= 9){
		return letter + '+';
	}
}

 function scoreToGrade (score){
	if(score > 90){
		return letterGrade('A', score);   //=====> A-
	} else if (score >= 80){
		return letterGrade('B', score);
	} else if(score >= 70){
		return letterGrade('C', score);
	} else if(score >= 60){
		return letterGrade('D', score);
	} else if(score < 60){
		return letterGrade('F', score);
	}
}

//===============More Pratice

//==========================================================================whatToDoOutside
	function whatToDoOutside (temp, condition){
		if(temp === 'Sunny' && condition === 'Warm'){
			return 'Go Surfing!';
		} else if(temp === 'Snowy' && condition === 'Cold'){
			return 'Go skiing!';
		} else if (temp === 'Rainy' && condition === 'Warm'){
			return 'Dance in the rain!';
		}
	}

//==============================Advance
//Refer above for advance bouncer

//Refer above for advance score to grade and letter grade

// Write a function or that works like ||, but only uses ! and &&.
// Write a function and that works like &&, but only uses ! and ||.

// // "not (A and B)" is the same as "(not A) or (not B)"

// also,

// "not (A or B)" is the same as "(not A) and (not B)".

function worksLikeAnd(a, b){
	if(!a || !b){
		return false;
	}
	return true;
}

function worksLikeOr(a, b){
	if(!a && !b){
		return false;
	}
	return true;
}

// console.log(worksLikeOr(false, false))
// console.log(worksLikeAnd(false, true));








