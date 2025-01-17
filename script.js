function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result

    // Regular expression to check if input starts with 'pet_' followed by alphanumeric characters
    let regex = /^pet_\w+$/;

    // Check if input matches the regular expression
    if (regex.test(input)) {
        result = "Valid Syntax";
    } else {
        result = "Invalid Syntax";
    }

    // Display the result
    document.getElementById('result').innerText = result; }
