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
console.log("Addition:", add(150, 15));         // 8
console.log("Subtract:", subtract(91, 13)); // 2
console.log("Multiply:", multiply(15, 23)); // 15
console.log("Divide:", divide(85, 15));     // 1.666...