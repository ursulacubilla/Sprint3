
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastName = document.getElementById("fLastN")
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	let errorAddress = document.getElementById("errorAddress");
	let errorLastN = document.getElementById("errorLastN");
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone");

	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || fName.value.length < 3){
		error++;
		fName.classList.add("is-invalid");
	}

	if(fEmail.value == "" || fEmail.value.length < 3){
		error++;
		fEmail.classList.add("is-invalid");
	}
	
	if(fAddress.value == "" || fEmail.value.length < 3){
		error++;
		fAddress.classList.add("is-invalid");
	}
	 
	if(fLastName.value == "" || fLastName.value.length < 3){
		error++;
		fLastName.classList.add("is-invalid");
	}

	if(fPassword.value == "" || fPassword.value.length < 3){
		error++;
		fPassword.classList.add("is-invalid");
	}

	if(fPhone.value == "" || fPhone.value.length < 3){
		error++;
		fPhone.classList.add("is-invalid");
	}

	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
