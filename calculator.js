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
console.log("Addition:", add(110, 15));         // 8
console.log("Subtract:", subtract(15, 13)); // 2
console.log("Multiply:", multiply(15, 13)); // 15
console.log("Divide:", divide(2, 3));     // 1.666...