let products = [
    { name: "Laptop", category: "electronics", price: 1000, inventory: 10 },
    { name: "T-Shirt", category: "apparel", price: 25, inventory: 50 },
    { name: "Apple", category: "groceries", price: 2, inventory: 100 },
    { name: "Soap", category: "household", price: 5, inventory: 30 },
    { name: "Headphones", category: "electronics", price: 150, inventory: 15 }
];
console.table(products);

console.log("- Applying category discounts -");
for (let product of products) {
    let discountRate = 0;
    
    switch (product.category) {
        case "electronics":
            discountRate = 0.20;
            break;
        case "apparel":
            discountRate = 0.15;
            break;
        case "groceries":
        case "household":
            discountRate = 0.10;
            break;
        default:
            discountRate = 0;
    }
    
    product.price = product.price * (1 - discountRate);
    console.log(`Product: ${product.name}, New price: $${product.price.toFixed(2)}`);
}

console.log("- Processing orders -");
let orderData = [
    { customerNum: 1, type: "student", items: ["Laptop", "Headphones"] },
    { customerNum: 2, type: "senior", items: ["T-Shirt", "Apple", "Soap"] },
    { customerNum: 3, type: "regular", items: ["Laptop"] }
];

for (let i = 0; i < orderData.length; i++) {
    let order = orderData[i];
    let cartTotal = 0;
    let extraDiscount = 0;

    if (order.type === "student") {
        extraDiscount = 0.05;
    } else if (order.type === "senior") {
        extraDiscount = 0.07;
    }
    order.items.forEach(itemName => {
        let product = products.find(p => p.name === itemName);
        if (product && product.inventory > 0) {
            cartTotal += product.price;
            product.inventory--;
        }
    });

    let finalTotal = cartTotal * (1 - extraDiscount);
    console.log(`Customer ${order.customerNum} (${order.type}): Total cost: $${finalTotal.toFixed(2)}`);
}

let singleProduct = products[0];
console.log(`- Product detail for ${singleProduct.name} -`);
for (let key in singleProduct) {
    console.log(`${key}: ${singleProduct[key]}`);
}

console.log("- Final inventory report -");
products.forEach(product => {
    console.log(`Product data for ${product.name}:`);
    
    for (const [key, value] of Object.entries(product)) {
        console.log(`   ${key}: ${value}`);
    }
});