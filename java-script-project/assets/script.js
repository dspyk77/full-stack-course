function textToPage() {
  var input = document.querySelector("#postIt").value
  console.log(input)
  var post = document.querySelector("#change")
  post.innerHTML = "Hello, " + input + " welcome home! "
}
// Telling user if a number is positive-negetive-NaN
var result = document.querySelector("#isResult");
var input = document.querySelector("#isPosOrNeg");

function isPositive() {
	val = input.value;

	if (val > 0) {
		console.log(val + " is Positive");
		result.innerHTML = val + " is Positive";
	} else if (val < 0) {
		console.log(val + " is Negative");
		result.innerHTML =val +  " is Negative";
	} else if (val == 0) { // if (val == 0) {
		console.log(val + " is Zero");
		result.innerHTML = val + " is neither positive or negitive.. its just Zero";
	} else {
		console.log(val + " is NaN");
    result.innerHTML = val + " is not a number... I'm not a shrink."
	}
}
