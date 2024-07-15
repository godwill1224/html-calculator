
let display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function appendNumber(number) {
    if (display.textContent === '0') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Sorry, failed to compute :(';
    }
}
