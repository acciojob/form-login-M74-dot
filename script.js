function getFormvalue() {
    //Write your code here
	 event.preventDefault();
	const form = document.getElementById('form1');
    
    // Retrieve the values of the input fields
    const firstName = form.elements['fname'].value;
    const lastName = form.elements['lname'].value;
    
    // Display the full name using alert
    alert(`${firstName} ${lastName}`);
}
