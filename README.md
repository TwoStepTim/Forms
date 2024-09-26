# Forms

Form Validation with Regular Expressions
Overview
This repository contains the code for a school assignment on form validation using regular expressions. The goal is to validate a form input field that accepts only alphanumeric values. JavaScript and regular expressions (regex) are used to validate the input and provide feedback to the user.

Assignment Requirements
For this assignment, you will:

Retrieve the input field element using JavaScript.
Add an event listener to handle the form's submit event.
Implement input validation:
Use a regular expression to validate that the input value is alphanumeric.
Display an error message if the input value is not alphanumeric.
Prevent form submission if the input value fails validation.
Display a confirmation message if the input is valid. Note that the form's submission will be simulated since the server is not set up for actual form processing.
Rubric
The assignment will be graded based on the following criteria:

Retrieve the input field element (15%): Correctly use JavaScript to access the input field.
Validate the input using a regular expression (30%): Implement regex to ensure the input is alphanumeric.
Display an error message for non-alphanumeric values (20%): Provide appropriate user feedback if validation fails.
Prevent form submission for non-alphanumeric values (15%): Block form submission if the input does not meet the validation criteria.
Display a confirmation message upon successful validation and submission (20%): Simulate form submission and provide a success message if the input is valid.
Getting Started
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/repo-name.git
Open the index.html file in a web browser to view the form.

The main JavaScript logic for form validation is in the validateScript.js file.

Testing
Enter alphanumeric values in the form input field (e.g., "Test123").
You should see a confirmation message indicating successful validation.
Enter non-alphanumeric values in the form input field (e.g., "@#%!").
You should see an error message, and the form should not be submitted.
Notes
The form will not actually submit due to server limitations (submit action is simulated).
Make sure to thoroughly test the form using different inputs to verify both the error and confirmation messages.
