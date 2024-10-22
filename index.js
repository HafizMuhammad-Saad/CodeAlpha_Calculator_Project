let currentInput = '';
let operator = '';
let previousInput = '';

const resultDisplay = document.getElementById('result');

const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.textContent;
        
        if (value === 'C') {
            currentInput = '';
            resultDisplay.value = '';
        } else if (value === '=') {
            
            resultDisplay.value = eval(currentInput);
            currentInput = resultDisplay.value;
        } else if (value === 'sin' || value === 'cos' || value === 'tan' || value === 'sqrt') {
            handleScientificFunction(value);

        } else {
            currentInput += value;
            resultDisplay.value = currentInput;
        }
    });
});

function handleScientificFunction(func) {
    let result;
    const inputValue = parseFloat(resultDisplay.value);
    
    switch (func) {
        case 'sin':
            result = Math.sin(inputValue);
            break;
        case 'cos':
            result = Math.cos(inputValue);
            break;
        case 'tan':
            result = Math.tan(inputValue);
            break;
        case 'sqrt':
            result = Math.sqrt(inputValue);
            break;
        default:
            return;
    }
    resultDisplay.value = result;
}

document.querySelector('.toggle-mode').addEventListener('click', function() {
    document.querySelector('.scientific-mode').style.display =
        document.querySelector('.scientific-mode').style.display === 'none' ? 'grid' : 'none';
});
