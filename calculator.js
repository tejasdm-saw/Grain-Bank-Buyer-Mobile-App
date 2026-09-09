// calculator.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Example usage
console.log("Addition:", add(35, 35));         // 8
console.log("Subtract:", subtract(35, 25)); // 2
console.log("Multiply:", multiply(25, 25)); // 15
console.log("Divide:", divide(25, 25));     // 1.666...