// Get the input field for email
const email = document.getElementById("email");

// Get the submit button of the form
const submit = document.getElementById("submit");

// Get the info icon element
const infoIcon = document.getElementById("infoIcon");

// Get the info text element
const infoText = document.getElementById("infoText");

// Function to validate email
function validateEmail(event) {
    // Regular expression to validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // Get the value of the email input field
    const emailValue = email.value;

    // Validate email
    if (!emailPattern.test(emailValue)) {
        // Display error icon
        infoIcon.style.display = "block";
        // Display error text
        infoText.style.display = "block";
        // Change border color to indicate error
        email.style.border = "2px solid hsl(0, 93%, 68%)";
        // Prevent form submission
        event.preventDefault(); // Prevent form submission
    } else {
        // Remove error information if email is valid
        removeErrorInfo();
    }
}

// Add event listener to the submit button to trigger email validation
submit.addEventListener("click", validateEmail, false);

// Function to remove error information
function removeErrorInfo() {
    // Hide error icon
    infoIcon.style.display = "none";
    // Hide error text
    infoText.style.display = "none";
    // Reset border color to default
    email.style.border = "2px solid hsl(0, 36%, 70%)";
} 

// Add event listener to the email input field to remove error information on click
email.addEventListener("click", removeErrorInfo, false);
