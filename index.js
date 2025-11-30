const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value); //this is not recommended for production code as it is a security risk
    }
    catch (e) {
        display.value = "Error";
    }
}