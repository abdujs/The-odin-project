const calculator = document.getElementById('calculator ');
const displayCurrent = document.getElementById('current-operand');
const displayPrevious  = document.getElementById('previous-operand');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
//special buttons
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
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();  }
  
  function deleteNumber() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();  }
  
  function compute() {
    // Function to compute the expression
  }
  
  function appendDot() {
    // Function to handle decimal point input
  }

let currentOperand = '';
let previousOperand = '';
let operation = null;

//Handling Number Inputs
function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return; // Prevent multiple decimals
  currentOperand = currentOperand.toString() + number.toString();
}

// Choosing an Operation
function chooseOperation(selectedOperation) {
  if (currentOperand === '') return;
  if (previousOperand !== '') {
      compute();
  }
  operation = selectedOperation;
  previousOperand = currentOperand;
  currentOperand = '';
}

//Computing the Result
function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
 
  switch (operation) {
      case '+':
          computation = prev + current;
          break;
      case '-':
          computation = prev - current;
          break;
      case '*':
          computation = prev * current;
          break;
      case '/':
          computation = prev / current;
          break;
      default:
          return;
  }

  currentOperand = computation;
  operation = undefined;
  previousOperand = '';
  updateDisplay(); // Refresh the display with the new state
}

//Updating the Display
function updateDisplay() {
  document.getElementById('current-operand').innerText = currentOperand;
  document.getElementById('previous-operand').innerText = previousOperand + ' ' + (operation || '');
}