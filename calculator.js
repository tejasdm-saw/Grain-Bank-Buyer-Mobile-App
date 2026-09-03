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
console.log("Addition:", add(25, 25));         // 8
console.log("Subtract:", subtract(25, 25)); // 2
console.log("Multiply:", multiply(25, 20)); // 15
console.log("Divide:", divide(20, 20));     // 1.666...