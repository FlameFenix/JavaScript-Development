function fruit(type, kg, price) {
    let weight = kg / 1000;
    let money = price * weight; 
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type}.`);
}

fruit('apple', 1563, 2.35);