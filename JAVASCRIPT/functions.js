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

// String manipulation
function formatName(fullName) {
    return fullName
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Array operations
function findExpensiveItems(items, threshold = 100) {
    return items.filter(item => item.price > threshold);
}

// Object manipulation
function updateCustomerInfo(customer, updates) {
    return { ...customer, ...updates, lastUpdated: new Date() };
}

// Advanced calculations function
function calculateFinalPrice(items, customerStatus) {
    const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    const discount = getDiscount(customerStatus);
    const discountAmount = subtotal * discount;
    const taxRate = 0.08;
    const tax = (subtotal - discountAmount) * taxRate;
    return {
        subtotal,
        discountAmount,
        tax,
        total: subtotal - discountAmount + tax
    };
}

// Try out all functions
console.log("Greetings:");
console.log(greet("Alice"));
console.log(greet("Bob"));

console.log("\nName Formatting:");
console.log(formatName("john doe"));
console.log(formatName("MARY JANE"));

console.log("\nCalculations:");
console.log(`Total cost: $${calculateTotal(100, 2).toFixed(2)}`);
console.log(`Premium total: $${calculateTotal(100, 2, 0.06).toFixed(2)}`);

console.log("\nExpensive Items:");
const items = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 150 }
];
console.log(findExpensiveItems(items));

console.log("\nCustomer Updates:");
const customer = {
    id: 1,
    name: "John Doe",
    email: "john@example.com"
};
const updatedCustomer = updateCustomerInfo(customer, {
    email: "john2@example.com",
    status: "premium"
});
console.log(updatedCustomer);

console.log("\nFinal Price Calculation:");
const cartItems = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 150 }
];
console.log(calculateFinalPrice(cartItems, "premium"));