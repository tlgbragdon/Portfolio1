 	// this file contains javascript and jQuery code for four exercises:

 	/** NUMBERS CODE **/
	var jq_numbers = [];
	var jq_least;
	var jq_greatest;
	var jq_mean;
	var jq_sum;
	var jq_product;


	function saveNumberJQ() {
    	var inputString = $('#userInputJQ').val();
		
		// remove any whitespace from user input
		inputString.replace(/ /g,'');

		// verify there is user input
		if (inputString === "") {
			$("#leastResultsJQ").text("Please enter a valid number, try again.");
 			return;
 		};

		// echo input back to user
		$("#valuesInputJQ").text("Numbers used for calculations: " + inputString);
		
		// clear the user input field
		$("#userInputJQ").val("");


		// split string using delimiter
		jq_numbers = inputString.split(",");

		// verify they are all numeric & convert to numbers
		for (var i=0; i<jq_numbers.length; i++) {
			if (isNaN(jq_numbers[i])) {
				$("#leastResults").text(jq_numbers[i] + " is not a valid number, try again.");
				return;
			}
			else {
				jq_numbers[i] = Number(jq_numbers[i]);
			};
		};
		computeResultsJQ();
		outputResultsJQ();
	};

	function computeResultsJQ() {
		var thisNum;
		//initialize each to first entry
		if (jq_numbers.length >0) {
			jq_least = jq_numbers[0];
			jq_greatest = jq_numbers[0];
			jq_mean = jq_numbers[0];
			jq_sum = jq_numbers[0];
			jq_product = jq_numbers[0];
		}

		for (var i=1; i<jq_numbers.length; i++) {
			thisNum = jq_numbers[i];
			if (jq_least > thisNum) { jq_least = thisNum;} 
			if (jq_greatest < thisNum) { jq_greatest = thisNum;}
			jq_sum += thisNum;
			jq_product = jq_product * thisNum;
		}
		jq_mean = jq_sum / jq_numbers.length;
	}	

	function outputResultsJQ() {
	 	
	 	// output least
		$("#leastResultsJQ").text("Least: " + jq_least);
		
		// output greatest
		$("#greatestResultsJQ").text("Greatest: " + jq_greatest);

		// output mean
		$("#meanResultsJQ").text("Mean: " + jq_mean);

		// output sum
		$("#sumResultsJQ").text("Sum: " + jq_sum);

		// output product
		$("#productResultsJQ").text("Product: " + jq_product);

		// clear array for next time around
		jq_numbers = [];
	}

	/** FACTORIAL CODE **/

	// output factorial of provided input
	function factorialJQ () {
		var num = $("#factorialInputJQ").val();
		var factorial = 1;

		if (isNaN(num) || (num=="") || num <0) {
			$("#factorialOutputJQ").text("Not a valid positive number, try again.");
		}
		// 0! is a special case
		else {
			if (Number(num) === 0)  
				{ factorial = 1;}  
			else {
				for (var i=Number(num); i>0; i--) {
					factorial = factorial * i;
				}
			};
			$("#factorialOutputJQ").text(num + "! = " + factorial);
		};
		// clear input
		$("#factorialInputJQ").val("");
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
	function fizzBuzzJQ (){

		// check user input
		var fizz = $("#fizzInputJQ").val();
		var buzz = $("#buzzInputJQ").val();
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
				$("#fizzBuzzOutputJQ").append(outputString);
			}
			else 
				$("#fizzBuzzOutputJQ").append("Invalid number for Buzz - must be integer from 1 to 100. Try Again.");
		}
		else
		    $("#fizzBuzzOutputJQ").append("Invalid number for Fizz - must be integer from 1 to 100. Try Again.");
		// clear input fields
		var fizz = $("#fizzInputJQ").val("");
		var buzz = $("#buzzInputJQ").val("");

	}

	/* PALINDROME CODE */

	function checkPalindromeJQ(str) {

		// make same case and remove any whitespace from user input
		str = str.toLowerCase().replace(/ /g,'');
	  	var len = Math.floor(str.length / 2);
	  	for (var i = 0; i < len; i++) {
	       if (str[i] !== str[str.length - i - 1])
	      return false;
	  	};
	 	return true;
	}

	function palindromeJQ() {
		var pString = $("#palindromeJQ").val();
		var outString = "";

		if (pString.length < 2) {
			$("#palindromeOutputJQ").text("Please enter a word or phrase to check.");
		}
		else {

			checkPalindromeJQ(pString) ? outString="Yes, "+pString+" is a palindrome!" : outString="No, "+pString+" is not a palindrome.";
			$("#palindromeOutputJQ").text(outString);
		};
		// clear input field
		$("#palindromeJQ").val("")
	}

$(document).ready(function(){

	/* listen for events */

	//get Numbers from user
	$('button#numbersJQ').click (function (event) {
		event.preventDefault();

		// remove any data from previous run
		$("#valuesInputJQ").empty();
		$("#leastResultsJQ").empty();
		$("#greatestResultsJQ").empty();
		$("#meanResultsJQ").empty();
		$("#sumResultsJQ").empty();
		$("#productResultsJQ").empty();
		saveNumberJQ();
	});

	$('button#factorialJQ').click (function (event) {
		event.preventDefault();
		// remove any data from previous run
		$("#factorialOutputJQ").empty();
		factorialJQ();
	});

	$('button#fizzBuzzJQ').click (function (event) {
		event.preventDefault();
		// remove any data from previous run
		$("#fizzBuzzOutputJQ").empty();
		fizzBuzzJQ();
	});

	$('button#palindromeJQ').click (function (event) {
		event.preventDefault();
		// remove any data from previous run
		$("#palindromeOutputJQ").empty();
		palindromeJQ();
	});

	$('button#clearAllJQ').click(function(event) {
		event.preventDefault();

		$("#valuesInputJQ").empty();
		$("#leastResultsJQ").empty();
		$("#greatestResultsJQ").empty();
		$("#meanResultsJQ").empty();
		$("#sumResultsJQ").empty();
		$("#productResultsJQ").empty();
		$("#factorialOutputJQ").empty();
		$("#fizzBuzzOutputJQ").empty();
		$("#palindromeOutputJQ").empty();

	});


});

