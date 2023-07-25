const display = document.getElementById('display');

// Function to handle appending input to the display
function appendInput(value) {
    display.value += value;
}

// Function to calculate the result of the expression and update the display
function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to handle keyboard events and allow only numbers
document.addEventListener('keydown', (event) => {
    const key = event.key;
    const validKeys = /^[0-9+*\-/=%\.\b\s]$/; // Valid keys (numbers, operators, decimal point, backspace, and space)

    if (!validKeys.test(key)) {
        event.preventDefault();
        alert('Only numbers are allowed!');
    }
});

