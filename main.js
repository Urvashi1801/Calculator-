// Get references to elements
const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let currentInput = ''; // Stores the current input string

// Add event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (button.classList.contains('ac')) {
            // Clear the input
            currentInput = '';
            inputBox.value = '0';
        } else if (button.classList.contains('del')) {
            // Delete the last character
            currentInput = currentInput.slice(0, -1);
            inputBox.value = currentInput || '0';
        } else if (button.classList.contains('equalBtn')) {
            // Evaluate the expression
            try {
                currentInput = eval(currentInput).toString();
                inputBox.value = currentInput;
            } catch (error) {
                inputBox.value = 'Error';
                currentInput = '';
            }
        } else {
            // Append the button value to the current input
            currentInput += buttonText;
            inputBox.value = currentInput;
        }
    });
});
 





