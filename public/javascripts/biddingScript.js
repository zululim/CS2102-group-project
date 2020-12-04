function check(event) {
	// Get Values
	var start  = document.getElementById('start').value;
	var name = document.getElementById('name').value;
	var type = document.getElementById('pet_type').value;

	// Simple Check
	if(start.length == 0) {
		alert("Invalid date");
		event.preventDefault();
		event.stopPropagation();
		return false;
	}
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