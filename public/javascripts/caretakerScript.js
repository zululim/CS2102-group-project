function check(event) {
	// Get Values
	var address  = document.getElementById('address' ).value;
	var transfer = document.getElementById('transfer').value;
	var employed = document.getElementById('employed').value;
	var max      = document.getElementById('max'     ).value;

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
	if(!(employed === "Part time" || employed === "Full time")) {
		alert("Invalid employment status");
		event.preventDefault();
		event.stopPropagation();
		return false;
	}
}