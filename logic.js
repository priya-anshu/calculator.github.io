let consoleDisplay = document.getElementById('console');

function appendToDisplay(value) {
    consoleDisplay.innerText += value;
}

function clearDisplay() {
    consoleDisplay.innerText = '0';
}

function clearLastEntry() {
    let currentDisplay = consoleDisplay.innerText;
    consoleDisplay.innerText = currentDisplay.substring(0, currentDisplay.length - 1) || '0';
}

function calculateResult() {
    try {
        consoleDisplay.innerText = eval(consoleDisplay.innerText);
    } catch (error) {
        console.error('Invalid expression');
        consoleDisplay.innerText = 'Error';
    }
}
