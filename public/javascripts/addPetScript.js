function check(event) {
	// Get Values
	var address  = document.getElementById('name').value;
	var transfer = document.getElementById('type').value;

	// Simple Check
	if(name.length == 0) {
		alert("Invalid name");
		event.preventDefault();
		event.stopPropagation();
		return false;
	}
	if(type.length == 0) {
		alert("Invalid type");
		event.preventDefault();
		event.stopPropagation();
		return false;
	}
}