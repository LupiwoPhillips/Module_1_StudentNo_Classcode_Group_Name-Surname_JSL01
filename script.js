function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result //

    // Regular expression to check if input starts with 'pet_' followed by alphanumeric characters
    let regex = /^pet_\w+$/;

    // input matches the regular expression //
    if (regex.test(input)) {
        result = "Valid Syntax";
    } else {
        result = "Invalid Syntax";
    }

    // The result // 
    document.getElementById('result').innerText = result; }
