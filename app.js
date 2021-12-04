var cashGiven = document.getElementById("cashGiven");
var billAmount = document.getElementById("billAmount");

var checkBtn = document.getElementById("check-btn");
var errorMessage = document.getElementById("error-message");
var returnChangesText = document.getElementById("change");
var notesTD = document.querySelectorAll(".notes-to-display");
var availableNotes = [2000, 500, 100, 10, 5, 1];

hideMessage();
checkBtn.addEventListener("click", validating);

function validating() {
	console.log("validating");
	hideMessage();

	if (billAmount.value == "" || cashGiven.value == "") {
		showErrorMessage("Fields cannot be empty*");
	} else {
		console.log(billAmount.value);
		console.log(cashGiven.value);
		hideMessage();
		if (Number(billAmount.value) < Number(cashGiven.value)) {
			calculateTheReturn(cashGiven.value - billAmount.value);
			showChange();
		} else {
			showErrorMessage("Cash given is less than bill amount*");
		}
	}
}

function calculateTheReturn(changeToBeReturned) {
	for (i = 0; i < availableNotes.length; i++) {
		var note = availableNotes[i];
		var notes = Math.floor(changeToBeReturned / note);
		changeToBeReturned = changeToBeReturned % note;
		notesTD[i].innerHTML = notes;
		if (notes >= 1) {
			notesTD[i].style.color = "green";
			notesTD[i].style.fontWeight = "bold";
		}
	}
	// notesTD.forEach(function (td) {
	// 	td.innerHTML = "0";
	// });
}
function showChange() {
	var change = cashGiven.value - billAmount.value;
	var changeInWords = "Return ₹" + change;
	returnChangesText.innerHTML = changeInWords;
	returnChangesText.style.display = "block";
	returnChangesText.style.color = "green";
	returnChangesText.style.fontWeight = "bold";
	returnChangesText.style.fontSize = "20px";
}

function showErrorMessage(message) {
	returnChangesText.style.display = "none";
	errorMessage.style.display = "block";
	errorMessage.innerHTML = message;
}

function hideMessage() {
	errorMessage.style.display = "none";
}
