// JavaScript code for form validation







 const form = document.getElementById('myForm');
 // Retrieve the input field value
 // Replace with actual input field ID
 const inputField = document.getElementById('inputField');
 
 form.addEventListener('submit', (e) => {
   // Validate the input
   if (!validateInput()) {
     alert("Not a valid input, please enter alphanumeric characters only.");// Invalid input: display error message
     e.preventDefault();   // Prevent form from submitting

   } else {
     alert("Form submitted successfully!");  // Valid input: display confirmation and submit the form

   }
 });
 
// Check if the input value matches the pattern
function validateInput() {
   const value = inputField.value;  
   const alphanumericPattern = /^[a-z0-9]+$/i; // Regular expression pattern for alphanumeric input

   return alphanumericPattern.test(value);  
 }
 