// Basic function
function greet(name) {
    return `Hello, ${name}!`;
}

// Function with multiple parameters
function calculateTotal(price, quantity, taxRate = 0.08) {
    const subtotal = price * quantity;
    const tax = subtotal * taxRate;
    return subtotal + tax;
}

// Function with conditional logic
function getDiscount(status) {
    if (status === "premium") return 0.2;
    if (status === "gold") return 0.15;
    return 0;
}

// Try out the functions
console.log("Greetings:");
console.log(greet("Alice"));
console.log(greet("Bob"));

console.log("\nCalculations:");
console.log(`Total cost: $${calculateTotal(100, 2).toFixed(2)}`);
console.log(`Premium total: $${calculateTotal(100, 2, 0.06).toFixed(2)}`);

console.log("\nDiscounts:");
console.log("Premium discount:", getDiscount("premium"));
console.log("Gold discount:", getDiscount("gold"));
console.log("Basic discount:", getDiscount("basic"));