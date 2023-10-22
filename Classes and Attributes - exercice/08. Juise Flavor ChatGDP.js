function juiceStore(input) {
    const juiceQuantities = new Map();
    const bottles = new Map();

    for (const line of input) {
        const [juice, quantity] = line.split(' => ');
        const currentQuantity = juiceQuantities.get(juice) || 0;
        const newQuantity = currentQuantity + Number(quantity);

        if (newQuantity >= 1000) {
            const bottlesToAdd = Math.floor(newQuantity / 1000);
            juiceQuantities.set(juice, newQuantity % 1000);

            if (bottlesToAdd > 0) {
                if (bottles.has(juice)) {
                    bottles.set(juice, bottles.get(juice) + bottlesToAdd);
                } else {
                    bottles.set(juice, bottlesToAdd);
                }
            }
        } else {
            juiceQuantities.set(juice, newQuantity);
        }
    }

    const result = [];
    for (const [juice, quantity] of bottles) {
        result.push(`${juice} => ${quantity}`);
    }
    console.log(result);
    return result.join('\n');
    
}
juiceStore(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']

)

