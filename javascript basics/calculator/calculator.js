const calculator = document.getElementById('calculator ');
const displayCurrent = document.getElementById('current-operand');
const displayPrevious  = document.getElementById('previous-operand');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
//specia buttons
const equalsButton = document.getElementById('equals');
const clearButton  = document.getElementById('clear');
const deleteButton  = document.getElementById('delete');
const dotButton = document.getElementById('dot');

// Adding Event Listeners for Button Clicks
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
        updateDisplay();
    });
  });
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText);
        updateDisplay();
    });
  });

  // Handling Special Functions
  function clear() {
    // Function to clear the calculator's state
  }
  
  function deleteNumber() {
    // Function to delete the last entered number or decimal
  }
  
  function compute() {
    // Function to compute the expression
  }
  
  function appendDot() {
    // Function to handle decimal point input
  }