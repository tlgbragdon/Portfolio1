 	// this file contains javascript for four exercises:

 	/** NUMBERS CODE **/
	var numbers = [];
	var least;
	var greatest;
	var mean;
	var sum;
	var product;
	var thisNum;

	function saveNumber() {

		var inputString = document.getElementById("userInput").value;
		var element;

		// remove any data from previous run
		// I could have just set innerHTML to null, but wanted to
		// experiement with the child node
		element = document.getElementById("valuesInput");
		if (element.firstChild) {
		    element.removeChild(element.firstChild);
		};

		element = document.getElementById("leastResults");
		if (element.firstChild) {
		    element.removeChild(element.firstChild);
		};		
		element = document.getElementById("greatestResults");
		if (element.firstChild) {
		    element.removeChild(element.firstChild);
		};		
		element = document.getElementById("meanResults");
		if (element.firstChild) {
		    element.removeChild(element.firstChild);
		};		
		element = document.getElementById("sumResults");
		if (element.firstChild) {
		    element.removeChild(element.firstChild);
		};		
		element = document.getElementById("productResults");
		if (element.firstChild) {
		    element.removeChild(element.firstChild);
		};
		// remove any whitespace from user input
		inputString = inputString.replace(/ /g,'');

		// verify there is user input
		if (inputString === "") {
			$("#leastResults").text("Please enter a valid number, try again.");
 			return;
 		};
		// echo input back to user
		document.getElementById("valuesInput").innerHTML= "Numbers used for calculations: " + inputString;

		// clear the user input field
		document.getElementById("userInput").value = "";

		// split string using delimiter
		numbers = inputString.split(",");

		// verify they are all numeric & convert to numbers
		for (var i=0; i<numbers.length; i++) {
			if (isNaN(numbers[i])) {
				document.getElementById("leastResults").innerHTML = numbers[i] + " is not a valid number, try again.";
				return;
			}
			else {
				numbers[i] = Number(numbers[i]);
			};
		};
		computeResults();
		outputResults();
	};

	function computeResults() {

		//initialize each to first entry
		if (numbers.length) {
			least = numbers[0];
			greatest = numbers[0];
			mean = numbers[0];
			sum = numbers[0];
			product = numbers[0];
		}

		for (var i=1; i<numbers.length; i++) {
			thisNum = numbers[i];
			if (least > thisNum) { least = thisNum;} 
			if (greatest < thisNum) { greatest = thisNum;}
			sum += thisNum;
			product = product * thisNum;
		}
		mean = sum / numbers.length;
	}	

	function outputResults() {

	 	// output least
		document.getElementById("leastResults").innerHTML = "Least: " + least;
		
		// output greatest
		document.getElementById("greatestResults").innerHTML = "Greatest: " + greatest;

		// output mean
		document.getElementById("meanResults").innerHTML = "Mean: " + mean;

		// output sum
		document.getElementById("sumResults").innerHTML = "Sum: " + sum;

		// output product
		document.getElementById("productResults").innerHTML = "Product: " + product;

		//clear the array 
		numbers = [];
	}

	/** FACTORIAL CODE **/

	// output factorial of provided input
	function Factorial () {
		var num = document.getElementById("factorialInput").value;
		var factorial = 1;

		if (isNaN(num) || (num=="") || num <0) {
			document.getElementById("factorialOutput").innerHTML = "Not a valid positive number, try again.";
		}
		// 0! is special case
		else {
			if (Number(num) === 0)  { factorial = 1;}  
			else {
				for (var i=Number(num); i>0; i--) {
					factorial = factorial * i;
				}
			};
			document.getElementById("factorialOutput").innerHTML = num + "! = " + factorial;
		};
		// clear input
		document.getElementById("factorialInput").value = "";
	}

	/**  FIZZ BUZZ CODE **/

	// if user input is valid (positive int from 1 to 100)
	function validInput(num) {
		if (isNaN(num) || (num=="") || (num % 1 != 0) || (num <=0)  || (num > 100)) {
			return false;		// Not a Number, or not an int from 1 to 100
		};
		return true; 	
	};
		
	
	// find and output FizzBuzz for numbers from 1 to 100
	function fizzBuzz (){

		// check user input
		var fizz = document.getElementById("fizzInput").value;
		var buzz = document.getElementById("buzzInput").value;
		var outputString = "";
		var fbString = "";

		if (validInput(fizz)) {
			if (validInput(buzz)) {
				for (var i=1; i<=100; i++) {
					fbString = i;
					if (i % fizz == 0) {
						fbString = "Fizz";
						if (i % buzz == 0) {
							fbString = "Fizz Buzz"
						};
					}
					else if (i % buzz == 0) {
						fbString = "Buzz";
					}
				outputString = outputString + " <br> " + fbString;
				}
				document.getElementById("fizzBuzzOutput").innerHTML = outputString;
			}
			else 
				document.getElementById("fizzBuzzOutput").innerHTML = "Invalid number for Buzz - must be integer from 1 to 100. Try Again.";
		}
		else
		    document.getElementById("fizzBuzzOutput").innerHTML = "Invalid number for Fizz - must be integer from 1 to 100. Try Again.";
		// clear input fields
		document.getElementById("fizzInput").value = "";
		document.getElementById("buzzInput").value = "";
	}

	/* PALINDROME CODE */

	function checkPalindrome(str) {
	    // make same case and remove any whitespace from user input
		str = str.toLowerCase().replace(/ /g,'');
	  	var len = Math.floor(str.length / 2);
	  	for (var i = 0; i < len; i++) {
	       if (str[i] !== str[str.length - i - 1])
	      return false;
	  	};
	 	return true;
	}

	function palindrome() {
		var pString = document.getElementById("palindrome").value;
		var outString = "";

		if (pString.length < 2) {
			$("#palindromeOutput").text("Please enter a word or phrase to check.");
		}
		else {
			checkPalindrome(pString) ? outString="Yes, "+pString+" is a palindrome!" : outString="No, "+pString+" is not a palindrome."
			document.getElementById("palindromeOutput").innerHTML = outString;
		};
		//reset input field
		document.getElementById("palindrome").value = "";
	}

	function clearAll() {

		document.getElementById("valuesInput").innerHTML = "";
		document.getElementById("leastResults").innerHTML = "";
		document.getElementById("greatestResults").innerHTML = "";
		document.getElementById("meanResults").innerHTML = "";
		document.getElementById("sumResults").innerHTML = "";
		document.getElementById("productResults").innerHTML = "";
		document.getElementById("factorialOutput").innerHTML = "";
		document.getElementById("fizzBuzzOutput").innerHTML = "";		   
		document.getElementById("palindromeOutput").innerHTML = "";

	};

