function check(event) {
	// Get Values
	var phone   = document.getElementById('phone'  ).value;
	var name    = document.getElementById('name'   ).value;
	var user    = document.getElementById('user'   ).value;

	// Simple Check
	if(name.length == 0) {
		alert("Invalid name");
		event.preventDefault();
		event.stopPropagation();
		return false;
	}
	if(phone.length != 8) {
    	alert("Invalid phone number");
    	event.preventDefault();
    	event.stopPropagation();
    	return false;
    }
	if (!(user === "PCS admin" || user === "Caretaker" || user === "Pet Owner")) {
	    alert("Invalid user type");
	    event.preventDefault();
	    event.stopPropagation();
	    return false;
	}
}