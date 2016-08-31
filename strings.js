var outputDiv = document.getElementById("return");
var userInput = document.getElementById("userInput");
var button = document.getElementById("Enter");
var testString = "";


function reversal(string) {
	return string.split("").reverse().join("");
}

function alphabits(string) {
	return string.split("").sort().join("");
}

function palindrome(string) {
	var reverseString = string.split("").reverse().join("");
	if (string === reverseString){
		return "Your string is a palindrome.";
	} else {
		return "Your string is not a palindrome."
	}
}



function createString(userInput) {
  	testString = document.getElementById("userInput").value;
  	
  	outputDiv.innerHTML = "<div class='returns'>" + "Your string in reverse: " + reversal(testString) + "</div>";
	outputDiv.innerHTML += "<div class='returns'>" + "Your string in alphabetical order: " + alphabits(testString) + "</div>";
	outputDiv.innerHTML += "<div class='returns'>" + palindrome(testString) + "</div>";

}


function enterValidate(event) {
	if (event.keyCode == 13 || event.which == 13) {
       createString();
       
	}

}


button.addEventListener('click', createString);
userInput.addEventListener('keydown', enterValidate);
