function checkInfo(event) {
	// Get Values
	var address  = document.getElementById('address' ).value;
	var transfer = document.getElementById('transfer').value;
	var c_card   = document.getElementById('c_card'  ).value;

	// Simple Check
	if(address.length == 0) {
		alert("Invalid address");
		event.preventDefault();
		event.stopPropagation();
		return false;
	}
	if(transfer.length == 0) {
		alert("Invalid transfer method");
		event.preventDefault();
		event.stopPropagation();
		return false;
	}
	if(c_card.length != 16) {
		alert("Invalid credit card number");
		event.preventDefault();
		event.stopPropagation();
		return false;
	}
}

function checkCaretaker(event) {
	// Get Values
	var require = document.getElementById('date').value;

	// Simple Check
	if(require.length == 0) {
		alert("Invalid date");
		event.preventDefault();
		event.stopPropagation();
		return false;
	}
}