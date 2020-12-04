function checkInfo(event) {
	// Get Values
	var search = document.getElementById('search').value;

	// Simple Check
	if(search.length == 0) {
		alert("Invalid query");
		event.preventDefault();
		event.stopPropagation();
		return false;
	}
}