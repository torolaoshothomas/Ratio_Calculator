function calculateRatio() {
    // Get values from input fields
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Validate input
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = 'Please enter valid numbers in both fields.';
        return;
    }

    // Calculate the ratio
    let ratio;
    if (num2 === 0) {
        ratio = 'undefined (division by zero)';
    } else {
        ratio = (num1 / num2).toFixed(2);
    }

    // Display the result
    document.getElementById('result').innerText = `The ratio is: ${ratio}`;
}

// Add event listeners to input fields
document.getElementById('num1').addEventListener('input', calculateRatio);
document.getElementById('num2').addEventListener('input', calculateRatio);